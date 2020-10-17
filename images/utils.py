import numpy as np
import urllib
import json
import cv2
import os
import sys


def image_to_sketch(image):
    try:
        # convert to gray scale
        grayImage = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        # invert the gray image
        grayImageInv = 255 - grayImage
        # Apply gaussian blur
        grayImageInv = cv2.GaussianBlur(grayImageInv, (21, 21), 0)
        # blend using color dodge
        output = cv2.divide(grayImage, 255 - grayImageInv, scale=256.0)
        return output
    except Exception as e:
        print(str(e))


def convert_to_sketch(stream=None):
    try:
        # taking file object and converting to opencv usable format
        data = stream.read()
        image = np.asarray(bytearray(data), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)

        # using sketch fucntion to make the sketch image
        sketch = image_to_sketch(image)

        # converting the sketch image to string to pass to cloudinary
        img_encode = cv2.imencode('.jpg', sketch)[1]
        data_encode = np.array(img_encode)
        str_encode = data_encode.tostring()

        return str_encode
    except Exception as e:
        print("error in converting file to image", str(e))
