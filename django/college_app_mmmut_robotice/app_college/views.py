from django.shortcuts import render,redirect
from .models import Aboutform,Import_notice,Contact,Gallery_img,Team_info,Circuitary_work,Web_work,Event

# Create your views here.
def home(request):
    mydata = Aboutform.objects.all()
    notice = Import_notice.objects.all()

    if request.method=="POST":
        name = request.POST.get('person')
        msm = request.POST.get('main_msm')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        number = request.POST.get('number')
        print(name,msm, email, subject,number)
        f = Contact()
        f.name= name
        f.phone_number = number
        f.email = email
        f.subject = subject
        f.email_msm = msm
        f.save()
        return redirect('/')
    return render(request, '../templates/app_college/home.html',{'mydata':mydata,'notice':notice})

def sem(request):
    event = Event.objects.all()
    return render(request, 'app_college/sem.html',{'event':event})
    
def log_in(request):
    return render(request, 'app_college/log_in.html')

def event_show(request,event_id):
    data = Event.objects.get(pk=event_id)
    return render(request, 'app_college/event_show.html',{'data':data})

def workshop(request):
    web_data = Web_work.objects.all()
    cir_data = Circuitary_work.objects.all()
    return render(request, 'app_college/workshop.html',{'web_data':web_data,'cir_data':cir_data})

def gallery(request):
    gallery_images = Gallery_img.objects.all()
    return render(request, 'app_college/gallery.html',{'data':gallery_images})

def team(request):
    team_data = Team_info.objects.all()
    return render(request, 'app_college/team.html',{'data':team_data})

# User name => Yash
# Password -> Yash@