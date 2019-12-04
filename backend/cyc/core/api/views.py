from rest_framework import viewsets
from cyc.core.models import Check
from .serializers import CheckSerializer


class CheckViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Checks to be viewed or edited.
    """
    queryset = Check.objects.all().order_by('-retrieved_text')
    serializer_class = CheckSerializer
