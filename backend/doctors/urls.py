from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from doctors import views

urlpatterns = [
    path('', views.DoctorList.as_view()),
    path('<int:pk>/', views.DoctorDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
