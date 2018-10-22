from django.conf.urls import url, include
from app_api.views import *


urlpatterns = [
		url(r'^login/$', UserLogin.as_view(), name='userlogin'),
		url(r'^registered/$', UserRegistered.as_view(), name='userregistered'),
		url(r'^changepassword/$', UserLoginChangePassword.as_view(), name='userloginchangepassword'),
	]