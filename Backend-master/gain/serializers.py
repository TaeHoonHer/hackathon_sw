from rest_framework import serializers
from .models import Gain

class GainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gain
        fields = ('id', 'title', 'description', 'completed')