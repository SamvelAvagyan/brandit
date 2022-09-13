from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    #path('', views.apiOverview, name="api-overview"),
    path('portfolio-list/', views.PortfolioList.as_view()),
    path('project-type-list/', views.ProjectTypeList.as_view()),
    path('project-design-list/', views.ProjectDesignList.as_view()),
    path('what-our-clients-say-list/', views.WhatOurClientsSayList.as_view()),
    path('contact-us-list/', views.ContactUsList.as_view()),
    path('price-offer-list/', views.PriceOfferList.as_view()),
    path('schedule-call-list/', views.ScheduleACallList.as_view()),
    path('our-work-list/', views.OurWorkList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)