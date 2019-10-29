from rest_framework import serializers
from .models import Progress, Standup, User


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ('id', 'user', 'accomplished', 'working_on', 'blocker', 'standup')

class StandupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ('id', 'date', 'user')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')