from rest_framework import viewsets, status
from articles.models import Article
from .serializers import ArticleSerializer


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
