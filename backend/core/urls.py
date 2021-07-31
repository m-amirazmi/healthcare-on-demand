from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path,  include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('clinics/', include('clinics.urls')),
    path('locations/', include('locations.urls')),
    path('services/', include('services.urls')),
    path('doctors/', include('doctors.urls')),
    path('symptoms/', include('symptoms.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
