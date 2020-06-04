from django.contrib.auth.models import User, Group
from jobs.models import Job
from rest_framework import serializers

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'text', 'done']
