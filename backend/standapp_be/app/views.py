from django.contrib.auth.models import User
from rest_framework import viewsets
from standapp_be.app.serializers import ProgressSerializer, StandupSerializer
from .models import Progress


# class AppViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all()
#     serializer_class = AppSerializer


class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
