from rest_framework import serializers
from .models import Progress


class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = ('id', 'user', 'accomplished', 'working_on', 'blocker', 'standup')