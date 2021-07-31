from django.db import models
from django.contrib.auth.models import User
from dateutil.relativedelta import relativedelta
from datetime import date
from clinics.models import Clinic


class Doctor(models.Model):
    name = models.CharField(max_length=200)
    dob = models.DateField(max_length=8)
    age = models.IntegerField()
    phone_number = models.CharField(max_length=20)
    clinic = models.ForeignKey(Clinic, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def get_age(self):
        today = date.today()
        delta = relativedelta(today, self.dob)
        self.age = str(delta.years)
        return self.age

    def __str__(self):
        return self.name
