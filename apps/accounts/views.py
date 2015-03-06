from .permissions import IsAdminOrIsSelf
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    model = User
    queryset = User.objects.filter()

    def get_permissions(self):
        return (permissions.AllowAny() if self.request.method == 'POST' else IsAdminOrIsSelf()),
