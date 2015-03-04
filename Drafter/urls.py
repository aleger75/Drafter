from django.conf.urls import patterns, include, url
from django.contrib import admin
from apps.accounts.views import UserView
from apps.core.views import TagView, DraftView
from rest_framework import routers
from django.views.generic import TemplateView


router = routers.SimpleRouter()
router.register(r'accounts', UserView)
router.register(r'tags', TagView)
router.register(r'drafts', DraftView)

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(router.urls, namespace='api')),
    url(r'^api/accounts/auth/signin/', 'rest_framework_jwt.views.obtain_jwt_token', name='signin'),
    url(r'^$', TemplateView.as_view(template_name='base.html')),
)
