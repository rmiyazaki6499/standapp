from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Progress


class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

    class Meta:
        model = Progress
        fields = ('accomplished', 'working_on', 'blocker')