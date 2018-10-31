from django.conf import settings
import os
from PIL import Image
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.mail import EmailMessage
from django.http import HttpResponseRedirect, HttpResponse, Http404, JsonResponse
from datetime import datetime
from app_api.models import *




class SiteUrl(object):

	''' Ger secure and unsecure host name'''

	@staticmethod
	def site_url(request):
		if request.is_secure():
			site_url = 'https://'+request.get_host()
		else:
			site_url = 'http://'+request.get_host()
		return site_url


class CropImage(object):

	''' Resize image using PIL '''

	@classmethod
	def saveimage(self, filename, imagepath, height, width):
		if height != None:
			img = Image.open(filename)
			img_resolution=(height, width)
			savemg = img.resize(img_resolution, Image.ANTIALIAS)
		else:
			savemg = Image.open(filename)
		filepath = settings.MEDIA_URL + imagepath
		directory = os.path.dirname(filepath)
		if not os.path.exists(directory):
			os.makedirs(directory)
		savemg.save(filepath + str(filename))
		return True


class CommonPagination(object):

	'''Common pagination for all model'''
	
	@staticmethod
	def paginattion(request, modeldata, pagesize):
		paginator = Paginator(modeldata, pagesize)
		page = request.GET.get('page')
		try:
			querylist = paginator.page(page)
		except PageNotAnInteger:
			querylist = paginator.page(1)
		except EmptyPage:
			querylist = paginator.page(paginator.num_pages)

		return querylist


class SendMail(object):

	''' Common Email Setting '''
	
	@staticmethod
	def mail(request, subject, email, email_html):
		try:
			to = [email]
			from_email = settings.EMAIL_HOST_USER
			msg = EmailMessage(subject, email_html, to=to, from_email=from_email)
			msg.content_subtype = "html"
			msg.send()
			fail_type = 1
		except:
			fail_type = 0
		return fail_type


class StudentMultiLnaguageField(object):

	''' Common Email Setting '''
	
	@staticmethod
	def Field(request, casedetail, language, locafiel):
		curriculum, subjectgroup, subject = '','',''
		if locafiel:
			if language == "en":
				location = casedetail.state.nameen +','+casedetail.city.nameen
			elif language == "zh-hans":
				location = casedetail.state.nameca +','+casedetail.city.nameca
			elif language == "zh-hant":
				location = casedetail.state.namema +','+casedetail.city.namema
			else:
				location = casedetail.state.nameen +','+casedetail.city.nameen
			return location
		else:
			if language == "en":
				curriculum = casedetail.curriculum.nameen
				subjectgroup = casedetail.curriculumgroupsubject.nameen
				subject = casedetail.subject.nameen
			elif language == "zh-hans":
				curriculum = casedetail.curriculum.nameca
				curricsubjectgroupulum =  casedetail.curriculumgroupsubject.nameca
				subject = casedetail.subject.nameca
			elif language == "zh-hant":
				curriculum = casedetail.curriculum.namema
				subjectgroup = casedetail.curriculum.namema
				subject = casedetail.subject.namema
			else:
				curriculum = casedetail.curriculum.nameen
				subjectgroup = casedetail.curriculumgroupsubject.nameen
				subject = casedetail.subject.nameen

			return curriculum, subjectgroup, subject


class TeacherPagination(object):

	'''Common pagination for all model'''
	
	@staticmethod
	def paginattion(request, modeldata, pagesize, page):
		paginator = Paginator(modeldata, pagesize)
		try:
			querylist = paginator.page(page)
		except PageNotAnInteger:
			querylist = paginator.page(1)
		except EmptyPage:
			querylist = paginator.page(paginator.num_pages)

		return querylist


class PostCaseFilter(object):

	'''Common pagination for all model'''
	
	@staticmethod
	def filter(request, queryset):

		# Search filter
		if request.GET.get('subject') != "" and  request.GET.get('subject')  != None:
			queryset = queryset.filter(subject_id=  request.GET.get('subject'))
		
		if request.GET.get('status') != "" and  request.GET.get('subject')  != None:
			queryset = queryset.filter(status =  request.GET.get('status'))
		if request.GET.get('date') != "" and  request.GET.get('date')  != None:
			date = datetime.strptime(str(request.GET['date']), '%m/%d/%Y').strftime('%m/%d/%y')
			queryset = queryset.filter(addedsearch = str(date))
		return queryset

# Save excel sheet




