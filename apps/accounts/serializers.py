from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email')
        write_only_fields = ('password',)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
