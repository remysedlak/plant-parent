from django.db import models
from django.utils import timezone

class Plant(models.Model):
    SPECIES_CHOICES = [
        ('succulent', 'Succulent'),
        ('fern', 'Fern'),
        ('flower', 'Flower'),
        ('tree', 'Tree'),
        ('herb', 'Herb'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100, help_text="Name you gave this plant")
    species = models.CharField(max_length=50, choices=SPECIES_CHOICES, default='other')
    scientific_name = models.CharField(max_length=100, blank=True, null=True)
    acquired_date = models.DateField(default=timezone.now)
    location = models.CharField(max_length=100, blank=True, help_text="e.g., Living room, Balcony")

    watering_interval_days = models.PositiveIntegerField(help_text="How often this plant needs water (in days)")
    last_watered = models.DateField(default=timezone.now, blank=True)

    notes = models.TextField(blank=True, help_text="Any care notes or reminders")

    def needs_watering(self):
        from datetime import date, timedelta
        next_water = self.last_watered + timedelta(days=self.watering_interval_days)
        return date.today() >= next_water

    def __str__(self):
        return f"{self.name} ({self.species})"

    class Meta:
        ordering = ['name']
        verbose_name = 'Plant'
        verbose_name_plural = 'Plants'

class PlantImage(models.Model):
    plant = models.ForeignKey(Plant, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(default='fallback.png', blank=True, upload_to='images/')
    description = models.CharField(max_length=255, blank=True, help_text="Description of the image")
    date_added = models.DateField(default=timezone.now)

    def __str__(self):
        return f"Image of {self.plant.name}" if self.plant else "Unlinked Image"