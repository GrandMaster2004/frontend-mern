from django.shortcuts import render

# Create your views here.
def def_home(request):
    return render(request,'Eureka_digital/home.html')