from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Plant, PlantImage
from .serializers import PlantSerializer, PlantImageSerializer

@api_view(['GET'])
def get_plants(request):
    # Simulate some data fetching logic
    plants = Plant.objects.all()
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_photos(request):
    # Simulate some data fetching logic
    plants = PlantImage.objects.all()
    serializer = PlantImageSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def plants_needing_water(request):
    plants = [plant for plant in Plant.objects.all() if plant.needs_watering()]
    serializer = PlantSerializer(plants, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def upload_plant(request):
    serializer = PlantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def upload_photo(request):
    serializer = PlantImageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)