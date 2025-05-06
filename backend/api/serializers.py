from rest_framework import serializers
from base.models import Plant, PlantImage

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'

class PlantImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantImage
        fields = ['description', 'image', 'plant', 'date_added', 'id']