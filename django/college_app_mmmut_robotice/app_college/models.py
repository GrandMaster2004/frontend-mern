from django.db import models

# Create your models here.

class Aboutform(models.Model):
    text=models.CharField(max_length=2000)
    # html_img = models.CharField(max_length=100) if you want this then given only class name

class Import_notice(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='myimage')

class Contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)
    phone_number = models.CharField(max_length=10)
    subject = models.CharField(max_length=50)
    email_msm = models.CharField(max_length=1000)

class Gallery_img(models.Model):
    image_gallery = models.ImageField(upload_to='gallery_img')

class Team_info(models.Model):
    image_team = models.ImageField(upload_to='team_img')
    team_name = models.CharField(max_length=20)
    std_post = models.CharField(max_length=30)
    year = models.CharField(max_length=20)
    insta_link = models.CharField(max_length=100)
    facebook_link = models.CharField(max_length=100)
    linkedin_link = models.CharField(max_length=100)

class Web_work(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=1000)
    image_web = models.ImageField(upload_to='web_img')
    video_link= models.CharField(max_length=500)
class Circuitary_work(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=1000)
    image_web = models.ImageField(upload_to='Circuitary_img')
    video_link= models.CharField(max_length=500)

class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    event_title = models.CharField(max_length=20)
    description = models.CharField(max_length=1000)
    event_format = models.CharField(max_length=500)
    event_schedule = models.CharField(max_length=500)
    image_Event = models.ImageField(upload_to='Event_img')
    