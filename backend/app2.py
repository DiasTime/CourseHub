import firebase_admin
from firebase_admin import credentials
from flask import Flask, render_template

app = Flask(__name__)

def convert_to_embed_url(video_url):
    return video_url.replace("watch?v=", "embed/")

# Initialize Firebase
serviceAccountKeyFile = "firestore.js"
cred = credentials.Certificate(serviceAccountKeyFile)
firebase_admin.initialize_app(cred)
db = firebase_admin.firestore.client()

def get_next_course_file():
    course_files = []
    docs = db.collection(u'courses').stream()
    for doc in docs:
        course_data = doc.to_dict()
        course_name = course_data.get('course_name', '')
        course_slogan = course_data.get('course_slogan', '')
        course_descriptions = course_data.get('course_descriptions', [])

        course_files.append({
            'course_name': course_name,
            'course_slogan': course_slogan,
            'course_descriptions': course_descriptions
        })

    if not course_files:
        return 'courses1.txt'
    else:
        course_numbers = [int(file['course_name'].split('courses')[-1]) for file in course_files if file['course_name'].startswith('courses') and file['course_name'].split('courses')[-1].isdigit()]
        next_course_number = max(course_numbers) + 1
        return f'courses{next_course_number}.txt'

@app.route('/')
def index():
    course_files = []

    # Read data from Firestore
    docs = db.collection(u'courses').stream()
    for doc in docs:
        course_data = doc.to_dict()
        course_name = course_data.get('course_name', '')
        course_slogan = course_data.get('course_slogan', '')
        course_descriptions = course_data.get('course_descriptions', [])

        course_files.append({
            'course_name': course_name,
            'course_slogan': course_slogan,
            'course_descriptions': course_descriptions
        })

    return render_template('available_courses.html', courses=course_files)

if __name__ == '__main__':
    app.run(debug=True,port=5001)