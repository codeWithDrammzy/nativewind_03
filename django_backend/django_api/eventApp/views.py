from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event
from .serializers import EventModelSerializers

from rest_framework import status

def index(request):
    return HttpResponse('hello from the app')





@api_view(['GET', 'POST'])
def event_list(request):
    if request.method == 'GET':
        queryset = Event.objects.all().order_by('-id')
        serializer = EventModelSerializers(queryset, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventModelSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
