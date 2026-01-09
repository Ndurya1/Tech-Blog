from django.contrib import admin
from .models import Blog
# Register your models here.


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
  def has_add_permission(self, request): 
    return request.user.is_superuser
  def has_delete_permission(self, request, obj = None):
    return super().has_delete_permission(request, obj)
  
 
    