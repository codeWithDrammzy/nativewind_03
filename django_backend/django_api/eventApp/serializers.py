from rest_framework import serializers
from .models import*


class EventModelSerializers(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'