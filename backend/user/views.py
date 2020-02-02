from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import *
from .models import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        username = request.query_params.get('username', None)
        user = User.objects.get(username=username)
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)