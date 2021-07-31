from django.db import models
from locations.models import Location
from services.models import Service
from symptoms.models import Symptom


class Clinic(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    services = models.ManyToManyField(Service)
    symptoms_handled = models.ManyToManyField(Symptom)
    name = models.CharField(max_length=200, null=False)
    description = models.TextField()
    est_year = models.CharField(max_length=10, null=False)
    phone_number = models.CharField(max_length=20, null=False)
    registration_number = models.CharField(max_length=200)
    image_main = models.ImageField(upload_to='images/', null=True)
    image_1 = models.ImageField(upload_to='images/', null=True)
    image_2 = models.ImageField(upload_to='images/', null=True)
    image_3 = models.ImageField(upload_to='images/', null=True)
    image_4 = models.ImageField(upload_to='images/', null=True)
    image_5 = models.ImageField(upload_to='images/', null=True)
    image_6 = models.ImageField(upload_to='images/', null=True)
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
