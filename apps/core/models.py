from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class Tag(models.Model):
    title = models.CharField(max_length=15)

    def get_absolute_url(self):
        return '/tag/%i/%s/' % (self.pk, self.title)

    def __str__(self):
        return self.title


class Draft(models.Model):
    author = models.ForeignKey(User)
    title = models.CharField(max_length=100)
    tags = models.ManyToManyField(Tag, related_name="drafts_associated")
    content = models.TextField(max_length=2000)
    creation_date = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)
    slug = models.SlugField(blank=True, null=True)

    class Meta:
        ordering = ['creation_date', 'last_update']

    def save(self, **kwargs):
        self.slug = slugify(self.title)
        super().save()

    def get_absolute_url(self):
        return '/draft/%i/%s/' % (self.pk, self.slug)

    def __str__(self):
        return self.author.username + ' - ' + self.slug
