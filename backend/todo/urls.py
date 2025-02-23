from django.urls import path
from .views import TodoListCreateView,TodoDeleteView

urlpatterns = [
  path("todos/",TodoListCreateView.as_view(),name="todo-list-create"),
  path("todos/<int:pk>/",TodoDeleteView.as_view(),name="todo-delete"),
]

