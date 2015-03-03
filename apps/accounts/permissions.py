from rest_framework import permissions


class IsAdminOrIsSelf(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS or request.user.is_staff

    def has_object_permission(self, request, view, obj):
        print(permissions.SAFE_METHODS)
        return request.user.is_staff or obj == request.user
