from symptoms.models import Symptom
from symptoms.serializers import SymptomSerializer
from rest_framework import generics


class SymptomList(generics.ListCreateAPIView):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer


class SymptomDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer
