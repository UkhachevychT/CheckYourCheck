from django.urls import include, path


urlpatterns = [
    path('api/v1/', include('cyc.core.api.urls')),
]
