from rest_framework import serializers
from .models import Standup


class StandupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standup
        fields = ('id', 'date', 'users', 'team')