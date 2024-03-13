from flask import Flask, render_template
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = Flask(__name__)

# Initialize Firestore with your credentials
cred = credentials.Certificate("firestore.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def convert_to_embed_url(video_url):
    return video_url.replace("watch?v=", "embed/")

@app.route('/')
def index():
    # Чтение данных из Firestore
    courses = []
    courses_ref = db.collection('courses').get()
    for course_doc in courses_ref:
        course_data = course_doc.to_dict()
        course = {
            'title': course_data['title'],
            'author': course_data['author'],
            'date': course_data['date'],
            'video_embed_src': convert_to_embed_url(course_data['video_src']),
            'chapters': course_data['chapters'] if 'chapters' in course_data else []
        }
        courses.append(course)

    return render_template('courseview.html', courses=courses)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
