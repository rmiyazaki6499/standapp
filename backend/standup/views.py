from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import *
from .models import Standup

class StandupViewSet(viewsets.ModelViewSet):
    queryset = Standup.objects.all()
    serializer_class = StandupSerializer
    filterset_fields = ('teamId')
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        team_id = request.query_params.get('teamId', None)
        standups = Standup.objects.filter(team_id=team_id)
        serializer = StandupSerializer(standups, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)

    def create(self, request):
        standup = Standup()
        standup.save()
        standup.user.add(request.user)
        serializer = StandupSerializer(standup)
        return Response(serializer.data)