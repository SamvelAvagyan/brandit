from rest_framework import serializers
from .models import *

class ProjectDesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDesign
        fields = '__all__'

class PortfolioSerializer(serializers.ModelSerializer):
    project_design = ProjectDesignSerializer(many=True, read_only=True)

    class Meta:
        model = Portfolio
        fields = '__all__'

class ProjectTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectType
        fields = '__all__'

class WhatOurClientsSaySerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatOurClientsSay
        fields = '__all__'

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'

class PriceOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceOffer
        fields = '__all__'

class ScheduleACallSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleACall
        fields = '__all__'

class OurWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurWork
        fields = '__all__'