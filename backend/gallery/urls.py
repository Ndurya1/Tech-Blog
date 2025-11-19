from django.urls import path
from .import views

urlpatterns = [
    path('', views.ImageListCreateView.as_view(), name='image-list-create'), 
]