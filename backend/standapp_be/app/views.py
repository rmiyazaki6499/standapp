from django.contrib.auth.models import User
from rest_framework import viewsets
from standapp_be.app.serializers import AppSerializer


class AppViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = AppSerializer