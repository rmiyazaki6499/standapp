from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Progress, Standup


class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

    class Meta:
        model = Progress
        fields = ('user', 'accomplished', 'working_on', 'blocker', 'standup')

    class Meta:
        model = Standup
        fields = ('date')