# Generated by Django 4.2.4 on 2024-02-08 14:59

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="post",
            old_name="user",
            new_name="user_profile",
        ),
    ]
