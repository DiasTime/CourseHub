import firebase_admin
from firebase_admin import credentials
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

def convert_to_embed_url(video_url):
    return video_url.replace("watch?v=", "embed/")

def get_next_course_file():
    doc_ref = db.collection(u'courses').document()

