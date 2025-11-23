from django.db import models
from rest_framework import permissions

# Create your models here.
class Blog(models.Model):
    image = models.ImageField(upload_to='blog_images/', null=True, blank=True)
    title = models.CharField(max_length=200)
    summary = models.CharField(max_length=300)
    content = models.TextField(default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
   