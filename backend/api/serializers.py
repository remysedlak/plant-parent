from rest_framework import serializers
from base.models import Plant, PlantImage

class PlantSerializer(serializers.ModelSerializer):
    
    needs_watering = serializers.SerializerMethodField()

    class Meta:
        model = Plant
        fields = '__all__'

    def get_needs_watering(self, obj):
        return obj.needs_watering()
        

class PlantImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantImage
        fields = ['description', 'image', 'plant', 'date_added', 'id']