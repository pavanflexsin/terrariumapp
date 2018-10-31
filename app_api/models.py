from __future__ import unicode_literals
from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime

# Create your models here.
# -*- coding: utf-8 -*-


GENDER = (
    (1, 'Male'),
    (2, 'Female'),
)





class User(AbstractUser):

    ''' User model to user info '''
    
    age = models.CharField(default = 0,  max_length=500, blank=True, null=True)
    gender = models.IntegerField(choices= GENDER, default = 1,  blank=True, null=True)
    grade = models.CharField(max_length= 500, blank=True, null=True, default='')
    mobilenumber = models.CharField(max_length= 500, blank=True, null=True, default='')
    forpasswordotp = models.CharField(max_length=500, blank=True, null=True, default='')
    facebooklogin = models.CharField(max_length=500, blank=True, null=True, default='')
    googlelogin = models.CharField(max_length=500, blank=True, null=True, default='')
    address = models.CharField(max_length=500, blank=True, null=True, default='')
    profile_pic1 = models.FileField(max_length=500, blank=True, null=True, default='')
    is_active = models.BooleanField(default= 1)
    added = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return self.id

    class Meta:
        db_table = "auth_user"

