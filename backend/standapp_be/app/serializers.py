from django.contrib.auth.models import User, Group
from rest_framework import serializers


class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')