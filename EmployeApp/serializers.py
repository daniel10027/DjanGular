from rest_framework import serializers
from .models import Departement, Employee



class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departement
        fields = ("DepartmentId",
                  "DepartmentName")


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee

        fields = ("EmployeeId",
                  "EmployeeName",
                  "Department",
                  "DateOfJoining",
                  "PhotoFileName" )
    
    