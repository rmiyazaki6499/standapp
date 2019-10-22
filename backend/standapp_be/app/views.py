from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from standapp_be.app.serializers import *
from .models import Progress, Standup


class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    filterset_fields = ('standupId')
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        standup_id = request.query_params.get('standupId', None)
        progresses = Progress.objects.filter(team=standup_id)
        serializer = ProgressSerializer(progresses, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        userId = request.user.id
        team = Team.objects.filter(user=userId)
        serializer = TeamSerializer(team, many=True)
        return Response(serializer.data)

    def create(self, request):
        team = Team()
        team.team_name = request.data['team_name']
        team.save()
        team.user.add(request.user)
        serializer = TeamSerializer(team)
        return Response(serializer.data)

class StandupViewSet(viewsets.ModelViewSet):
    queryset = Standup.objects.all()
    serializer_class = StandupSerializer
    filterset_fields = ('userId')
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        userId = request.user.id
        team = Standup.objects.filter(user=userId)
        serializer = StandupSerializer(team, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)

    def create(self, request):
        team = Standup()
        team.save()
        team.user.add(request.user)
        serializer = StandupSerializer(team)
        return Response(serializer.data)

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
