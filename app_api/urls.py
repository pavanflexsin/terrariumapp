from django.conf.urls import url, include
from app_api.views import *


urlpatterns = [
		url(r'^login/$', UserLogin.as_view(), name='userlogin'),
		url(r'^registered/$', UserRegistered.as_view(), name='userregistered'),
		url(r'^changepassword/$', UserLoginChangePassword.as_view(), name='userloginchangepassword'),
		url(r'^facebookgooglelogin/$', FacebookGoogleLogin.as_view(), name='facebookgooglelogin'),
		url(r'^categorylist/$', CategoryList.as_view(), name='categorylist'),
		url(r'^forgotpassword/$', ForgotPasswordEmailView.as_view(), name='forgotpassword'),
		url(r'^forgotchangepassword/(?P<key>.+)/$', ChangeForgotPasswordEmail.as_view(), name='forgotchangepassword'),
		url(r'^showvideoslist/$', GetAllShowsAccordingCategory.as_view(), name='showvideoslist'),
		# url(r'^showallvideoslist/$', GetAllShowsAccordingWithOutCategory.as_view(), name='showallvideoslist'),
		url(r'^serieslist/$', GetAllShowsAccordingWithOutCategorySeries.as_view(), name='serieslist'),
		url(r'^getallserieseepisode/$', GetAllShowSeriesShow.as_view(), name='get_all_seriese_episode'),
		url(r'^activateaccount/(?P<key>.+)/$', ActivateUserAccount.as_view(), name='activateaccount'),

	]