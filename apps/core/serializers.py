from rest_framework import serializers
from .models import Tag, Draft
from django.contrib.auth.models import User


class DraftSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_absolute_url', read_only=True)
    tags = serializers.StringRelatedField(many=True)
    author = serializers.StringRelatedField()

    class Meta:
        model = Draft
        fields = ('id', 'author', 'title', 'tags', 'content', 'creation_date', 'last_update', 'slug', 'url')


class TagSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_absolute_url', read_only=True)

    class Meta:
        model = Tag
