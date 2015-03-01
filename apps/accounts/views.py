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

    @detail_route(methods=['post'], permission_classes=[IsAdminOrIsSelf])
    def set_password(self, request, pk=None):
        user = self.get_object()
        password = request.data['password']
        if password and user:
            user.set_password(password)
            user.save()
            return Response({'status': 'password set'})
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
