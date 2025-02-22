from django.db import models

# Create your models here.
class TodoList(models.Model):
  task = models.TextField(max=200)