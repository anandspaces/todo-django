from django.shortcuts import HttpResponse
from django.views import View

# Create your views here.
class Home(View):
  def get(self, request, *args, **kwargs):
    return HttpResponse("Hello World!")