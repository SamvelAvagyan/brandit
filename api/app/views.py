from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *
from validate_email import validate_email
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

class PortfolioList(generics.ListCreateAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

    def perform_create(self, serializer):
        serializer.save()

class PortfolioDetail(generics.RetrieveAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class ProjectTypeList(generics.ListCreateAPIView):
    queryset = ProjectType.objects.all()
    serializer_class = ProjectTypeSerializer

    def perform_create(self, serializer):
        serializer.save()

class ProjectTypeDetail(generics.RetrieveAPIView):
    queryset = ProjectType.objects.all()
    serializer_class = ProjectTypeSerializer

class ProjectDesignList(generics.ListCreateAPIView):
    queryset = ProjectDesign.objects.all()
    serializer_class = ProjectDesignSerializer

    def perform_create(self, serializer):
        serializer.save()

class ProjectDesignDetail(generics.RetrieveAPIView):
    queryset = ProjectDesign.objects.all()
    serializer_class = ProjectDesignSerializer

class WhatOurClientsSayList(generics.ListCreateAPIView):
    queryset = WhatOurClientsSay.objects.all()
    serializer_class = WhatOurClientsSaySerializer

    def perform_create(self, serializer):
        serializer.save()

class WhatOurClientsSayDetail(generics.RetrieveAPIView):
    queryset = WhatOurClientsSay.objects.all()
    serializer_class = WhatOurClientsSaySerializer

class ContactUsList(generics.ListCreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

    def perform_create(self, serializer):
        # if validate_email(serializer['email'].value, check_mx=False, verify=True):
        #     subject = 'Contact Us'
        #     message = f'Ողջույն, ես {serializer["name"].value}ն եմ: Իմ էլ. փոստը - {serializer["email"].value}: Նամակ - {serializer["email"].value}'
        #     send_mail_message(subject, message)
        #     print('200')
        #     return Response(status=status.HTTP_200_OK)
        # else:
        #     print('500')
        #     return Response(status=status.HTTP_404_NOT_FOUND)

        subject = 'Contact Us'
        message = f'Ողջույն, ես {serializer["name"].value}ն եմ: Իմ էլ. փոստը - {serializer["email"].value}: Նամակ - {serializer["email"].value}'
        send_mail_message(subject, message)
        #serializer.save()

class ContactUsDetail(generics.RetrieveAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

class PriceOfferList(generics.ListCreateAPIView):
    queryset = PriceOffer.objects.all()
    serializer_class = PriceOfferSerializer

    def perform_create(self, serializer):
        subject = 'Price Offer'
        message = f'Ողջույն, ես {serializer["firstname"].value} {serializer["lastname"].value}ն եմ: Իմ էլ. փոստը - {serializer["email"].value}, Հեռ. - {serializer["phone"].value}: Պրոեկտ - {serializer["project_type"].value}: Ընկերության անվանում - {serializer["company_name"].value} Պրոեկտի Նկարագրություն - {serializer["about_project"].value}'
        send_mail_message(subject, message)
        serializer.save()

class PriceOfferDetail(generics.RetrieveAPIView):
    queryset = PriceOffer.objects.all()
    serializer_class = PriceOfferSerializer

class ScheduleACallList(generics.ListCreateAPIView):
    queryset = ScheduleACall.objects.all()
    serializer_class = ScheduleACallSerializer

    def perform_create(self, serializer):
        subject = 'Schedule a Call'
        message = f'Ողջույն, ես {serializer["firstname"].value} {serializer["lastname"].value}ն եմ: Իմ էլ. փոստը - {serializer["email"].value}, Հեռ. - {serializer["phone"].value}: Զանգի նպատակը - {serializer["project_type"].value}: Օր/Ժամ - {serializer["date"].value} {serializer["time"].value}'
        send_mail_message(subject, message)
        serializer.save()

class ScheduleACallDetail(generics.RetrieveAPIView):
    queryset = ScheduleACall.objects.all()
    serializer_class = ScheduleACallSerializer

class OurWorkList(generics.ListCreateAPIView):
    queryset = OurWork.objects.all()
    serializer_class = OurWorkSerializer

    def perform_create(self, serializer):
        serializer.save()

class OurWorkDetail(generics.RetrieveAPIView):
    queryset = OurWork.objects.all()
    serializer_class = OurWorkSerializer

def send_mail_message(subject, message):
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email_from]
    send_mail(subject, message , email_from ,recipient_list )