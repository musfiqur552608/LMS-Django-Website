from rest_framework import serializers
from . import models


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ["full_name", "password", "email", "qualification", "mobile_no", "address"]