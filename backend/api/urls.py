from django.urls import path
from . import views

urlpatterns = [
    path('plants', views.get_plants),
    path('photos', views.get_photos),
    path('upload_plant/', views.upload_plant),
    path('upload_photo/', views.upload_photo),
    path('needs_watering/', views.plants_needing_water),
]