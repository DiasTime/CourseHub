from flask import Flask, render_template, request
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
    return render_template('add_course.html')

@app.route('/add_course', methods=['POST'])
def add_course():
    title = request.form['title']
    author = request.form['author']
    date = request.form['date']
    video_src = request.form['video_src']
    video_embed_src = convert_to_embed_url(video_src)
    course_name = request.form['course_name']
    course_slogan = request.form['course_slogan']
    # course_description = request.form['course_description']
    
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
            course_description_num = key.split('_')[-1]
            course_description=request.form.get(f'course_description_{course_description_num}', '')
            course_description = value
            course_descriptions.append(course_description)

    # Prepare data to be saved in Firestore
    data = {
        "title": title,
        "author": author,
        "date": date,
        "video_src": video_src,
        "video_embed_src": video_embed_src,
        "course_name": course_name,
        "course_slogan": course_slogan,
        "course_description": course_description,
        "chapters": chapters,
        "course_descriptions": course_descriptions
    }

    # Set data to Firestore with a unique document name
    doc_ref = db.collection('courses').document(f'course_{get_next_course_number()}')
    doc_ref.set(data)

    return 'Курс успешно добавлен и сохранен в Firestore.'

def get_next_course_number():
    # Get the total number of documents in the 'courses' collection
    courses_ref = db.collection('courses')
    return courses_ref.get().__len__() + 1

if __name__ == '__main__':
    app.run(debug=True)
