from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser
import cloudinary.uploader
from rest_framework import status


class index(APIView):
    parser_classes = (
        MultiPartParser,
        JSONParser,
    )

    def get(self, request):
        return Response("GET image to sketch")

    def post(self, request, format=None):
        try:
            file = request.data.get('picture')
            cloudinary_response = cloudinary.uploader.upload(file)
            data = cloudinary_response["secure_url"]
            return Response(data=data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(str(e))
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)
