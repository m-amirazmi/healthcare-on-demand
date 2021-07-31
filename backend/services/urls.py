from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from services import views

urlpatterns = [
    path('', views.ServiceList.as_view()),
    path('<int:pk>/', views.ServiceDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
