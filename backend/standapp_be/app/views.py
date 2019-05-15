from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from rest_framework.response import Response

from standapp_be.app.serializers import *
from .models import Progress, Standup

class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

    def list(self, request, *args, **kwargs):
        progresses = Progress.objects.all()
        serializer = ProgressSerializer(progresses, many=True)
        return Response(serializer.data)


class StandupDetailViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    filterset_fields = ('standupId')

    def list(self, request, *args, **kwargs):
        standup_id = request.query_params.get('standupId', None)
        progresses = Progress.objects.filter(standup=standup_id)
        serializer = ProgressSerializer(progresses, many=True)
        return Response(serializer.data)


class StandupViewSet(viewsets.ModelViewSet):
    queryset = Standup.objects.all()
    serializer_class = StandupSerializer

    def list(self, request, *args, **kwargs):
        standup = Standup.objects.all()
        serializer = StandupSerializer(standup, many=True)
        return Response(serializer.data)
