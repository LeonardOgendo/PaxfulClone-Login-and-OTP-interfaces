# Generated by Django 5.0.1 on 2024-01-05 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0005_otp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='victim',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
