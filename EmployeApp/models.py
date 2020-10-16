from django.db import models

class Departement(models.Model):
    """Model definition for Departement."""
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)

    class Meta:
        """Meta definition for Departement."""

        verbose_name = 'Departement'
        verbose_name_plural = 'Departements'

    def __str__(self):
        """Unicode representation of Departement."""
        return self.DepartmentName

class Employee(models.Model):
    """Model definition for Employee."""
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=100)

   
    class Meta:
        """Meta definition for Employee."""

        verbose_name = 'Employee'
        verbose_name_plural = 'Employees'

    def __str__(self):
        """Unicode representation of Employee."""
        return self.EmployeeName

   