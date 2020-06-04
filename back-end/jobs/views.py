from django.shortcuts import render
from jobs.models import Job
from jobs.serializers import TodoSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
# Create your views here.

class JobList(APIView):
    def get(self, request):
        response = requests.get('http://api.dataatwork.org/v1/jobs', params={'limit':40})
        return Response(response.json())

    def post(self, request):
        searchKey = request.data['title']
        response = requests.get('http://api.dataatwork.org/v1/jobs/autocomplete', params={'begins_with': searchKey,'limit':40})
        return Response(response.json())


class JobDetail(APIView):
    def get(self, request, pk):
        response = requests.get('http://api.dataatwork.org/v1/jobs/%s' % pk)
        jobTitle = response.json()['title']
        params = {'description': jobTitle}
        jobs = requests.get('https://jobs.github.com/positions.json', params=params)
        result = {'jobTitle': jobTitle, 'data':jobs.json()}
        return Response(result)

    def post(self, request, pk):
        print(request.data)
        location = request.data['location']
        response = requests.get('http://api.dataatwork.org/v1/jobs/%s' % pk)
        jobTitle = response.json()['title']
        print(response.json())
        params = {'description': jobTitle, 'location': location}
        jobs = requests.get('https://jobs.github.com/positions.json', params=params)
        result = {'jobTitle': jobTitle, 'data':jobs.json()}
        return Response(result)