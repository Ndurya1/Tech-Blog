from django.shortcuts import render
from rest_framework import generics
from .models import Image
from .serializers import ImageSerializer

# Create your views here.
class ImageListCreateView(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer  
