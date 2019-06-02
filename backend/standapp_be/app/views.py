from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from standapp_be.app.serializers import *
from .models import Progress, Standup

class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        progresses = Progress.objects.all()
        serializer = ProgressSerializer(progresses, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)


class StandupDetailViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    filterset_fields = ('standupId')
    permission_classes = (IsAuthenticatedOrReadOnly,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        standup_id = request.query_params.get('standupId', None)
        progresses = Progress.objects.filter(standup=standup_id)
        serializer = ProgressSerializer(progresses, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'user': unicode(request.user),  # `django.contrib.auth.User` instance.
            'auth': unicode(request.auth),  # None
        }
        return Response(content)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)


class StandupViewSet(viewsets.ModelViewSet):
    queryset = Standup.objects.all()
    serializer_class = StandupSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        standup = Standup.objects.all()
        serializer = StandupSerializer(standup, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)
