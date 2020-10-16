
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

from .models import Employee, Departement
from .serializers import EmployeeSerializer, DepartementSerializer

from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser

@csrf_exempt
def departmentApi(request, id=0):

    if request.method == 'GET':

        department = Departement.objects.all()
        department_serializer = DepartementSerializer(department, many=True)

        return JsonResponse(department_serializer.data, safe=False)

    elif request.method == 'POST':

        department_data = JSONParser().parse(request)
        department_serializer = DepartementSerializer(data=department_data)

        if department_serializer.is_valid():
             department_serializer.save()
             return JsonResponse("Departement Ajouté avec succes !", safe=False)
        return JsonResponse("Echec d'ajout du departement !", safe=False)

    elif request.method == 'PUT':

        department_data = JSONParser().parse(request)
        department = Departement.objects.get(DepartmentId=department_data['DepartmentId'])
        department_serializer = DepartementSerializer(department,data=department_data)
        if department_serializer.is_valid():
             department_serializer.save()
             return JsonResponse("Departement Modifié avec succes !", safe=False)
        return JsonResponse("Echec de modification du departement !", safe=False)

    elif request.method == 'DELETE':
        department = Departement.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Departement supprimé avec succes !", safe=False)


        
        
        
@csrf_exempt
def employeeApi(request, id=0):

    if request.method == 'GET':

        employee = Employee.objects.all()
        employee_serializer = EmployeeSerializer(employee, many=True)

        return JsonResponse(employee_serializer.data, safe=False)

    elif request.method == 'POST':

        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)

        if employee_serializer.is_valid():
             employee_serializer.save()
             return JsonResponse("Employé Ajouté avec succes !", safe=False)
        return JsonResponse("Echec d'ajout de l'Employé !", safe=False)

    elif request.method == 'PUT':

        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(EmployeeId=employee_data['EmployeeId'])
        employee_serializer = EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
             employee_serializer.save()
             return JsonResponse("Employé Modifié avec succes !", safe=False)
        return JsonResponse("Echec de modification de l' Employé !", safe=False)

    elif request.method == 'DELETE':
        employee = Employee.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Employé supprimé avec succes !", safe=False)

@csrf_exempt
def SaveFile(request):
    doc = request.FILES 
    file = doc['uploadedFile']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)

        
        
             




