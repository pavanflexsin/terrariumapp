from app_api.models import *
from rest_framework import serializers





class UserRegisteredSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
