from django.conf.urls import url, include
from loginad.views import *


urlpatterns = [
	url(r'^$', AdminLogin.as_view(), name='adminlogin'),
	url(r'^logout/$', AdminLogout.as_view(), name='adminlogout'),
	url(r'^forgotpassword/$', AdminForgotPassword.as_view(), name='adminforgot'),
	url(r'^changeforgotpassword/(?P<key>.+)/$', ChangeForgotPassword.as_view(), name='adminchangeforgot'),
	url(r'^changepassword/$', AdminChangePassword.as_view(), name='adminchangepassword'),
	url(r'^updateprofile/$', UpdateAdminProfile.as_view(), name='updateadminprofile'),
	url(r'^dashboard/$', AdminDashBoard.as_view(), name='admindashboard'),
	url(r'^checkemail/$', CheckEmailExists.as_view(), name='checkemail'),
	url(r'^checkeditemail/$', CheckEditEmailExists.as_view(), name='checkeditemail'),
	url(r'^username/$', CheckUserNameExists.as_view(), name='username'),
	url(r'^newuser/$', AddNewUser.as_view(), name='newuser'),
	]