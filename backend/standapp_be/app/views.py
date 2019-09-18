from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from standapp_be.app.serializers import *
from .models import Progress, Standup


class ProgressViewSet(viewsets.ModelViewSet):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer
    filterset_fields = ('standupId')
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        standup_id = request.query_params.get('standupId', None)
        progresses = Progress.objects.filter(standup=standup_id)
        serializer = ProgressSerializer(progresses, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)


class StandupViewSet(viewsets.ModelViewSet):
    queryset = Standup.objects.all().values()
    serializer_class = StandupSerializer
    filterset_fields = ('userId')
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def list(self, request, *args, **kwargs):
        userId = request.query_params.get('userId', None)
        print(userId)
        standup = Standup.objects.filter(user=userId)
        print(standup)
        # standup = Standup.objects.all(user.id in userId)
        serializer = StandupSerializer(standup, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)

# class BlogpostViewSet(viewsets.ModelViewSet):
#     # queryset = Blogpost.objects.all().order_by('date')
#     serializer_class = serializers.BlogpostSerializer

#     def get_queryset(self):
#         # Chances are, you're doing something more advanced here 
#         # like filtering.
#         Blogpost.objects.all().order_by('date')

#     def list(self, request, *args, **kwargs):
#         response = super().list(request, *args, **kwargs)
#         qs = self.get_queryset()
#         all_categories = Category.objects.filter(
#             id__in=Blogpost.categories.through.objects.filter(
#                 blogpost__in=qs
#             ).values('category_id')
#         )
#         category_names = {}
#         for category in all_categories:
#             category_names[category.id] = category.name

#         categories_map = defaultdict(list)
#         for m2m in Blogpost.categories.through.objects.filter(blogpost__in=qs):
#             categories_map[m2m.blogpost_id].append(
#                 category_names[m2m.category_id]
#             )

#         for each in response.data:
#             each['categories'] = categories_map.get(each['id'], [])

#         return response