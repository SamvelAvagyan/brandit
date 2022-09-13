from django.db import models

class ProjectType(models.Model):
    title = models.CharField(blank=True,max_length=50, unique=True)
    title_russian = models.CharField(blank=True,max_length=50, unique=True)
    title_armenian = models.CharField(blank=True,max_length=50, unique=True)

    def __str__(self):
        return self.title

class ProjectDesign(models.Model):
    title = models.CharField(blank=True, max_length=100)
    image = models.FileField(blank=True, upload_to='images/portfolio/project-design')
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Portfolio(models.Model):
    title = models.CharField(blank=True, max_length=100)
    div_image = models.FileField(blank=True, upload_to='images/portfolio')
    info_image = models.FileField(blank=True, upload_to='images/portfolio')
    client = models.CharField(blank=True, max_length=50)
    designer = models.CharField(blank=True, max_length=100)
    brief = models.TextField(default='')
    brief_russian = models.TextField(default='')
    brief_armenian = models.TextField(default='')
    project_type = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title')
    project_design = models.ManyToManyField(ProjectDesign)
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class WhatOurClientsSay(models.Model):
    description = models.TextField(default='')
    description_russian = models.TextField(default='')
    description_armenian = models.TextField(default='')
    image = models.FileField(blank=True, upload_to='images/what-our-clients-say')
    username = models.CharField(blank=True, max_length=50) 
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class ContactUs(models.Model):
    name = models.CharField(blank=True, max_length=50)
    email = models.CharField(blank=True, max_length=50) 
    message = models.TextField(default='')  

    def __str__(self):
        return self.email

class PriceOffer(models.Model):
    project_type = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title')
    company_name = models.CharField(blank=True, max_length=50)
    about_project = models.TextField(default='')
    #file = models.FileField(blank=True, upload_to='project-files/price-offer')
    firstname = models.CharField(blank=True, max_length=50)
    surname = models.CharField(blank=True, max_length=50)
    email = models.CharField(blank=True, max_length=50)
    phone = models.CharField(blank=True, max_length=50)

    def __str__(self):
        return self.company_name

class ScheduleACall(models.Model):
    project_type = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title')
    firstname = models.CharField(blank=True, max_length=50)
    surname = models.CharField(blank=True, max_length=50)
    email = models.CharField(blank=True, max_length=50)
    phone = models.CharField(blank=True, max_length=50)
    date = models.CharField(blank=True, max_length=200)
    time =  models.CharField(blank=True, max_length=200)

    def __str__(self):
        return self.email

class OurWork(models.Model):
    title = models.CharField(blank=True, max_length=100)
    image = models.FileField(blank=True, upload_to='images/our-works')
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.title