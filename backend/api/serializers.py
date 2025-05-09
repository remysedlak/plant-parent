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

class PlantWithLatestImageSerializer(serializers.ModelSerializer):
    latest_image = serializers.SerializerMethodField()

    class Meta:
        model = Plant
        fields = ['id', 'name', 'species', 'scientific_name', 'acquired_date',
                  'location', 'watering_interval_days', 'last_watered', 'notes', 'latest_image']

    def get_latest_image(self, obj):
        image = obj.images.order_by('-date_added').first()
        if image:
            return {
                'id': image.id,
                'image': image.image.url,
                'description': image.description,
                'date_added': image.date_added
            }
        return None