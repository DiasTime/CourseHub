import firebase_admin
from firebase_admin import credentials
from flask import Flask, render_template, request, redirect, url_for
from urllib.parse import urlparse, urljoin

app = Flask(__name__)

def convert_to_embed_url(video_url):
    youtube_domain = "youtube.com"
    if video_url.startswith("http") and youtube_domain in video_url:
        video_id = urlparse(video_url).query.split('v=')[-1]
        return f"https://www.youtube.com/embed/{video_id}"
    return video_url

def get_next_course_file():
    return db.collection(u'courses').document().id

# Initialize Firebase
serviceAccountKeyFile = "templates/firestore.json"
cred = credentials.Certificate(serviceAccountKeyFile)
firebase_admin.initialize_app(cred)
db = firebase_admin.firestore.client()

@app.route('/')
def index():
    courses = []

    # Read data from Firestore
    docs = db.collection(u'courses').stream()
    for doc in docs:
        course_data = doc.to_dict()
        course_descriptions = course_data.get('course_descriptions', [])
        chapters = course_data.get('chapters', [])

        courses.append({
            'id': doc.id,
            'course_descriptions': course_descriptions,
            'chapters': chapters
        })

    return render_template('available_courses.html', courses=courses)

@app.route('/add_course', methods=['GET', 'POST'])
def add_course():
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        date = request.form['date']
        video_src = request.form['video_src']
        video_embed_src = convert_to_embed_url(video_src)
        course_name = request.form['course_name']
        course_slogan = request.form['course_slogan']
        course_description = request.form['course_description']

        chapters = []
        for key, value in request.form.items():
            if key.startswith('chapter_title_'):
                chapter_num = key.split('_')[-1]
                chapter_title = value
                chapter_content = request.form.get(f'chapter_content_{chapter_num}', '')
                chapters.append({'title': chapter_title, 'content': chapter_content})

        course_descriptions = []
        for key, value in request.form.items():
            if key.startswith('course_description_'):
              
