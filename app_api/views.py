from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from app_api.serializers import *
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.views import APIView





class UserRegistered(APIView):

	def post(self, request, format=None):
		if 'email' not in request.data or 'username' not in request.data or 'password' not in request.data:
			content = {
				'response': None,
				'statusCode': 0,
				'message' : "Parameter Missing."
			}
			return Response(content)
		if User.objects.filter(username = request.data['username']).exists():
			content = {
				'response': None,
				'statusCode': 0,
				'message' : "Username already exists in our database."
			}
			return Response(content)

		if User.objects.filter(email = request.data['email']).exists():
			content = {
				'response': None,
				'statusCode': 0,
				'message' : "Username already exists in our database."
			}
			return Response(content)

		serializer = UserRegisteredSerializer(data=request.data)
		if serializer.is_valid():
			usersave = serializer.save()
			usersave.password = make_password(request.data['password'])
			usersave.is_active = False
			usersave.save()
			content = {
				'response': None,
				'statusCode': 1,
				'message' : "User registered successfully."
			}
			return Response(content)
		content = {
			'response': None,
			'statusCode': 0,
			'message' : "Something went wrong."
		}
		return Response(content)


class UserLogin(APIView):

	def post(self, request, format=None):
		if 'email' not in request.data or 'password' not in request.data:
			content = {
				'response': None,
				'statusCode': 0,
				'message' : "Parameter Missing."
			}
			return Response(content)
		try:
			user = User.objects.get(email = request.data['email'],is_superuser = False)
			if user.is_active:
				checkPassword = check_password(request.data['password'], user.password)
				if not checkPassword:
					content = {
						'response': None,
						'statusCode': 0,
						'message' : "Your password is wrong",
					}
					return Response(content)
				else:
					content = {
						'response': {'userid':user.id,'email':user.email},
						'statusCode': 1,
						'message' : "Sucess",
					}
					return Response(content)
			else:
				content = {
					'response': None,
					'statusCode': 0,
					'message' : "Your account is In-active. Please active your account."
				}
				return Response(content)

		except:
			content = {
				'response': None,
				'statusCode': 0,
				'message' : "You have entered invalid email."
			}
			return Response(content)


class UserLoginChangePassword(APIView):

	def post(self, request, format=None):
		if 'userid' not in request.data or 'oldpassword' not in request.data or 'newpassword' not in request.data:
			content = {
				'response': None,
				'statusCode': 0,
				'message' : "Parameter Missing."
			}
			return Response(content)
		try:
			user = User.objects.get(id= request.data['userid'])
			checkPassword = check_password(request.data['oldpassword'], user.password)
			if not checkPassword:
				content = {
					'response': None,
					'statusCode': 0,
					'message' : "Your old password is wrong.",
				}
				return Response(content)
			else:
				user.password = make_password(request.data['newpassword'])
				user.save()
				content = {
					'response':'',
					'statusCode': 1,
					'message' : "Your password has been changed.",
				}
				return Response(content)
		except:
			content = {
				'response': None,
				'statusCode': 0,
				'message' : "User does not exists in our database."
			}
			return Response(content)
