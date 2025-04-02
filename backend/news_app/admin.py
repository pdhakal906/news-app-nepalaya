from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Author, News, User

# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = User

    # Add `role` to the displayed fields
    fieldsets = UserAdmin.fieldsets + ((None, {"fields": ("role",)}),)

    # Add `role` to the fields when adding a user
    add_fieldsets = UserAdmin.add_fieldsets + (
        (
            None,
            {
                "fields": (
                    "email",
                    "role",
                )
            },
        ),
    )

    list_display = ["email", "role", "is_staff", "is_superuser"]
    search_fields = ["email", "role"]
    ordering = ["email"]


admin.site.register(User, CustomUserAdmin)
admin.site.register(Author)
admin.site.register(News)
