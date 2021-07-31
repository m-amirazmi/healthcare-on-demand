from django.db import models


class Location(models.Model):
    address = models.CharField(max_length=200)
    postcode = models.CharField(max_length=10)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    country = models.CharField(max_length=20)
    latitude = models.CharField(max_length=200, null=True)
    longitude = models.CharField(max_length=200, null=True)
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.address
