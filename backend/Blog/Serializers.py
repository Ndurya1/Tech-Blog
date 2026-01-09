from rest_framework import serializers 
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    image=serializers.ImageField(use_url=True)
    class Meta:
        model = Blog
        fields = '__all__'