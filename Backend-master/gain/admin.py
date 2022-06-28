from django.contrib import admin
from .models import Gain

class GainAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Gain, GainAdmin)
