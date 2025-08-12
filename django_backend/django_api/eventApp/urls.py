from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name=''),
    path('event-list', views.event_list, name='event-list')
]
