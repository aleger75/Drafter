from .permissions import IsAdminOrIsSelf
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    model = User
    queryset = User.objects.filter()
    permission_classes = [IsAdminOrIsSelf]
