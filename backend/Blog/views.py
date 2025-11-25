from django.shortcuts import render
from rest_framework import generics
from .models import Blog
from .Serializers import BlogSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny 
from .permissions import isAdminOrReadOnly

# Create your views here.
class BlogListCreateView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [AllowAny]

class BlogRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'id'
    permission_classes = [isAdminOrReadOnly]