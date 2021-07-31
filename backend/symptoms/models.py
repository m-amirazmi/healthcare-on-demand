from django.db import models


class Symptom(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
