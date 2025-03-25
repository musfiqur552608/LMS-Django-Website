from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerializer
from rest_framework.response import Response
from . import models

class TeacherList(APIView):
    def get(self, request):
        teacher = models.Teacher.objects.all()
        serializer = TeacherSerializer(teacher, many=True)
        return Response(serializer.data)
