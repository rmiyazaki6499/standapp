from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import *
from .models import Team


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    filterset_fields = ('teamId')
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        userId = request.user.id
        team = Team.objects.filter(users=userId)
        serializer = TeamSerializer(team, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)

    def create(self, request):
        team = Team()
        team.team_name = request.data['team_name']
        team.save()
        team.users.add(request.user)
        serializer = TeamSerializer(team)
        return Response(serializer.data)