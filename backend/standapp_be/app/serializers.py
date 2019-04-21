from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Progress, Standup, User


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ('user', 'accomplished', 'working_on', 'blocker', 'standup')

class StandupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ('date')