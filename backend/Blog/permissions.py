from rest_framework.permissions import BasePermission, SAFE_METHODS

class isAdminOrReadOnly(BasePermission):
    """
    Custom permission to only allow admins to edit objects, but allow read-only access for others.
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_staff
