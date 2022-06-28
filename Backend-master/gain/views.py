from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GainSerializer
from .models import Gain

# Create your views here.

class GainView(viewsets.ModelViewSet):
    serializer_class = GainSerializer
    queryset = Gain.objects.all()
