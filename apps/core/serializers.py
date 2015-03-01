from rest_framework import serializers
from .models import Tag, Draft
from django.contrib.auth.models import User


class DraftSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_draft_url')

    def get_draft_url(self, obj):
        return obj.get_absolute_url()

    class Meta:
        model = Draft


class TagSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField('get_tag_url')

    def get_tag_url(self, obj):
        return obj.get_absolute_url()

    class Meta:
        model = Tag
        fields = ('id', 'title', 'url')
