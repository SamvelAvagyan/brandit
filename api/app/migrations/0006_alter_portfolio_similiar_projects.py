# Generated by Django 3.2.13 on 2022-09-12 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_portfolio_similiar_projects'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='similiar_projects',
            field=models.ManyToManyField(to='app.Portfolio'),
        ),
    ]