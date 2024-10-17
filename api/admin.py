from django.contrib import admin

from .models import Item

# Register your models here.
class DisplayItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')

admin.site.register(Item, DisplayItemAdmin)