from django.conf.urls import patterns, include, url
from django.contrib import admin
from apps.accounts.views import UserView
from apps.core.views import TagView, DraftView
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'accounts', UserView)
router.register(r'users', UserView)
router.register(r'tags', TagView)
router.register(r'drafts', DraftView)

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(router.urls, namespace='api')),
)
