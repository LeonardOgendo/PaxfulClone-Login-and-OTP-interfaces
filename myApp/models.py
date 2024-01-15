from django.db import models

# Create your models here.
class Victim(models.Model):
    email= models.EmailField()
    password= models.CharField(max_length=100)

class OTP(models.Model):
    otp_code= models.CharField(max_length= 6)