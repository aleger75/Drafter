from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        write_only_fields = ('password', 'is_superuser', 'is_staff', 'groups', 'user_permissions')

    def restore_object(self, attrs, instance=None):
        user = super().restore_object(attrs, instance)
        password = attrs.get('password', None)
        if password:
            user.set_password(password)

        return user
