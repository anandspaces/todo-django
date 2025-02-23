from rest_framework import generics
from .models import TodoModel
from .serializers import TodoSerializer

# ListCreateAPIView handles GET and POST request
class TodoListCreateView(generics.ListCreateAPIView):
  queryset = TodoModel.objects.all().order_by('created_at')
  serializer_class = TodoSerializer


# DestroyAPIView handles DELETE Requests
class TodoDeleteView(generics.DestroyAPIView):
  queryset = TodoModel.objects.all()
  serializer_class = TodoSerializer