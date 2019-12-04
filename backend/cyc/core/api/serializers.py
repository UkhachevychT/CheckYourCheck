from rest_framework import serializers
from cyc.core.models import Check

class CheckSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Check
        fields = ['id', 'upload_date', 'image', 'retrieved_text']
