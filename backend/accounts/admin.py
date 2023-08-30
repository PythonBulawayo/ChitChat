from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser, Profile


class ProfileInline(admin.StackedInline):
    model = Profile
    # can_delete = False
    # verbose_name_plural = "Profile"


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ["username", "email"]
    inlines = [ProfileInline]
    fieldsets = ((None, {"fields": ("username",)}),)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.unregister(Group)
