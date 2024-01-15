from django.contrib import admin
from .models import Victim, OTP
# Register your models here.
class OTPAdmin(admin.ModelAdmin):
    list_display= ['otp_code']

admin.site.register(Victim)
admin.site.register(OTP, OTPAdmin)
