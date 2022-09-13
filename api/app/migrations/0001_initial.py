# Generated by Django 3.2.13 on 2022-09-11 12:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50)),
                ('email', models.CharField(blank=True, max_length=50)),
                ('message', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='OurWork',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100)),
                ('image', models.FileField(blank=True, upload_to='images/our-works')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectDesign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100)),
                ('image', models.FileField(blank=True, upload_to='images/portfolio/project-design')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=50, unique=True)),
                ('title_russian', models.CharField(blank=True, max_length=50, unique=True)),
                ('title_armenian', models.CharField(blank=True, max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='WhatOurClientsSay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(default='')),
                ('description_russian', models.TextField(default='')),
                ('description_armenian', models.TextField(default='')),
                ('image', models.FileField(blank=True, upload_to='images/what-our-clients-say')),
                ('username', models.CharField(blank=True, max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ScheduleACall',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(blank=True, max_length=50)),
                ('surname', models.CharField(blank=True, max_length=50)),
                ('email', models.CharField(blank=True, max_length=50)),
                ('phone', models.CharField(blank=True, max_length=50)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('project_type', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='app.projecttype', to_field='title')),
            ],
        ),
        migrations.CreateModel(
            name='PriceOffer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(blank=True, max_length=50)),
                ('about_project', models.TextField(default='')),
                ('file', models.FileField(blank=True, upload_to='project-files/price-offer')),
                ('firstname', models.CharField(blank=True, max_length=50)),
                ('surname', models.CharField(blank=True, max_length=50)),
                ('email', models.CharField(blank=True, max_length=50)),
                ('phone', models.CharField(blank=True, max_length=50)),
                ('project_type', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='app.projecttype', to_field='title')),
            ],
        ),
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100)),
                ('div_image', models.FileField(blank=True, upload_to='images/portfolio')),
                ('info_image', models.FileField(blank=True, upload_to='images/portfolio')),
                ('client', models.CharField(blank=True, max_length=50)),
                ('designer', models.CharField(blank=True, max_length=100)),
                ('brief', models.TextField(default='')),
                ('brief_russian', models.TextField(default='')),
                ('brief_armenian', models.TextField(default='')),
                ('project_design', models.ManyToManyField(to='app.ProjectDesign')),
                ('project_type', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='app.projecttype', to_field='title')),
            ],
        ),
    ]