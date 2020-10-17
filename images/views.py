from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser
import cloudinary.uploader
from rest_framework import status
from .utils import convert_to_sketch


class index(APIView):
    parser_classes = (
        MultiPartParser,
        JSONParser,
    )

    def post(self, request, format=None):
        try:
            file = request.data.get('picture')
            # sketch file is a string as cloudinary accepts strings or bytes or ....
            sketch_file = convert_to_sketch(stream=file)
            cloudinary_response = cloudinary.uploader.upload(sketch_file)
            data = cloudinary_response["secure_url"]
            return Response(data=data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print("error in request", str(e))
            return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)
