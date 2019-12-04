from django.db import models

class Check(models.Model):
    class Meta:
        verbose_name = 'check'
        verbose_name_plural = 'checks'

    id = models.BigIntegerField(primary_key=True)
    upload_date = models.DateTimeField(verbose_name='date uploaded')
    image = models.ImageField(upload_to='uploads/')
    retrieved_text = models.TextField(verbose_name='retrieved text', blank=True, null=True)
