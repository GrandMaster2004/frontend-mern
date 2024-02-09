
from Eureka_digital import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
     path('', views.def_home, name='home'),
    #  path('about', views.def_about, name='about'),
]
