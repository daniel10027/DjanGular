from django.contrib import admin

# Register your models here.f
from .models import Employee, Departement

admin.site.register(Employee)
admin.site.register(Departement)
