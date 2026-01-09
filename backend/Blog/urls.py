from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogListCreateView.as_view(), name='blog-list-create'),
    path('<int:id>/', views.BlogRetrieveUpdateDestroyView.as_view(), name='blog-detail'),
]



