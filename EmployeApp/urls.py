from django.conf.urls import url
from . import views
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('department/', views.departmentApi),
    url(r'department/([0-9]+)$', views.departmentApi),
    path('employee/', views.employeeApi),
    url(r'employee/([0-9]+)$', views.employeeApi),

    url(r'^SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)