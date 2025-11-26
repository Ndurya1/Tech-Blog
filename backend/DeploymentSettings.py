import os
import dj_database_url
from backend .settings. import *
from backend. settings import BASE_DIR

ALLOWED_HOSTS =[os.environ.get('RENDER_EXTERNAL_HOSTNAME')]
CRSF_TRUSTED_ORIGINS =['https://' +os.environ.get('RENDER_EXTERNAL_HOSTNAME') ]

SECRET_KEY = os.environ.get["SECRET_KEY"]



MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'allauth.account.middleware.AccountMiddleware',
]

DEBUG = False

CORS_ALLOW_ALL_ORIGINS =[
    "https://travel-and-tech.onrender.com"

]

STORAGES = [
   "default": {
        "BACKEND": "django.core.files.storage.fileSystemStorage",
   };

   "static files":{
       "BACKEND":"Whitenoise.Storage.CompressedStaticFilesStorage",
   };

]

DATABASES ={
    'default': dj_database_url.config(
        default= os.environ['DATABASE_URL']
        conn_max_age= 600
    )
         }
