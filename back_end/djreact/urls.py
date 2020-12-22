from django.contrib import admin
from django.urls import path, include, re_path


# drf_yasg code starts here
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Articles API",
        default_version='v1',
        description="List Articles",
        terms_of_service="https://www.library.org",
        contact=openapi.Contact(email="library@articles.org"),
        license=openapi.License(name="Awesome IP"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
# ends here

urlpatterns = [
    re_path(r'^doc(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),  # <-- Here
    path('doc/', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),  # <-- Here doc
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0),
         name='schema-redoc'),  # <-- Here redoc
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/articles/', include('articles.api.urls')),

]

