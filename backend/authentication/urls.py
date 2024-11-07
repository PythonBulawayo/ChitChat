from django.urls import path
from . import views
from .views import RefreshTokenView

urlpatterns = [
    path("login/", views.LoginView.as_view(), name='login'),
    path("logout/", views.LogoutView.as_view(), name='logout'),
    path('api/token/refresh/', RefreshTokenView.as_view(), name='token_refresh'),
]
