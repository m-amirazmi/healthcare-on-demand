from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from clinics import views

urlpatterns = [
    path('', views.ClinicList.as_view()),
    path('<int:pk>/', views.ClinicDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
