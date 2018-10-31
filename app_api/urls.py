from django.conf.urls import url, include
from app_api.views import *


urlpatterns = [
		url(r'^login/$', UserLogin.as_view(), name='userlogin'),
		url(r'^registered/$', UserRegistered.as_view(), name='userregistered'),
		url(r'^changepassword/$', UserLoginChangePassword.as_view(), name='userloginchangepassword'),
		url(r'^facebookgooglelogin/$', FacebookGoogleLogin.as_view(), name='facebookgooglelogin'),
		url(r'^activateaccount/(?P<key>.+)/$', ActivateUserAccount.as_view(), name='activateaccount'),

	]