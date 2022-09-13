from django.contrib import admin
from .models import *

admin.site.site_header = 'Brandit Administration'
admin.site.site_title = 'Brandit Administration'

admin.site.register(Portfolio)
admin.site.register(ProjectType)
admin.site.register(ProjectDesign)
admin.site.register(WhatOurClientsSay)
admin.site.register(ContactUs)
admin.site.register(PriceOffer)
admin.site.register(ScheduleACall)
admin.site.register(OurWork)
