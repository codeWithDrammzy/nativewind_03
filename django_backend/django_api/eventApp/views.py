from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event
from .serializers import EventModelSerializers

def index(request):
    return HttpResponse('hello from the app')

@api_view(['GET'])
def event_list(request):
    queryset = Event.objects.all()
    serializer = EventModelSerializers(queryset, many=True)
    return Response(serializer.data)
