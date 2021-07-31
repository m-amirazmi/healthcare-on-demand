from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from symptoms import views

urlpatterns = [
    path('', views.SymptomList.as_view()),
    path('<int:pk>/', views.SymptomDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
