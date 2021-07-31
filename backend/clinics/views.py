from clinics.models import Clinic
from clinics.serializers import ClinicSerializer
from rest_framework import generics


class ClinicList(generics.ListCreateAPIView):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer


class ClinicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer
