# Urls for jobs
from jobs import views
from django.urls import path
from django.urls import path, include

app_name = "jobs"

urlpatterns = [
    path('jobs/', views.JobList.as_view()),
    path('job/<pk>/', views.JobDetail.as_view()),
]