from django.db import models

# Create your models here.

class Job(models.Model):
    text = models.CharField(max_length=255)
    done = models.BooleanField(default=False)
