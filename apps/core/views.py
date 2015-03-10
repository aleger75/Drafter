from .serializers import TagSerializer, DraftSerializer
from .models import Draft, Tag
from rest_framework import viewsets
from .permissions import TagViewPermission, IsAdminOrIsSelf
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework import permissions


class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    model = Tag
    queryset = Tag.objects.filter()
    permission_classes = [TagViewPermission]

    @detail_route(methods=['get'], permission_classes=[TagViewPermission], url_path='filter-drafts')
    def filter_drafts(self, request, pk=None):
        tag = self.get_object()
        drafts_associated = Draft.objects.filter(tags=tag)

        return Response({'drafts_associated': [DraftSerializer(d).data for d in drafts_associated]})


class DraftView(viewsets.ModelViewSet):
    serializer_class = DraftSerializer
    model = Draft
    queryset = Draft.objects.filter()

    def get_permission(self):
        return permissions.AllowAny()
