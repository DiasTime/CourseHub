import firebase_admin
from firebase_admin import credentials
<<<<<<< HEAD
from flask import Flask, render_template, request
=======
from flask import Flask, render_template, request, redirect, url_for
>>>>>>> 92dec27fdf3ebcb1f8ae0a00c18d5f3e95d36a79

app = Flask(__name__)

def convert_to_embed_url(video_url):
    return video_url.replace("watch?v=", "embed/")

def get_next_course_file():
<<<<<<< HEAD
    return db.collection(u'courses').document().id

=======
    doc_ref = db.collection(u'courses').document()

<<<<<<< HEAD
>>>>>>> 92dec27fdf3ebcb1f8ae0a00c18d5f3e95d36a79
# Initialize Firebase
serviceAccountKeyFile = "firestore.js"
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
        course_name = course_data.get('course_name', '')
        course_slogan = course_data.get('course_slogan', '')
        course_descriptions = course_data.get('course_descriptions', [])
        chapters = course_data.get('chapters', [])

        courses.append({
            'course_name': course_name,
            'course_slogan': course_slogan,
            'course_descriptions': course_descriptions,
            'chapters': chapters
        })

    return render_template('courseview.html', courses=courses)

@app.route('/add_course', methods=['POST'])
def add_course():
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
            course_description_num = key.split('_')[-1]
            course_description=request.form.get(f'course_description_{course_description_num}', '')
            course_descriptions.append(course_description)

    # Get the next available course file name (now a Firestore document ID)
    file_name = get_next_course_file()

    # Save data to Firestore
    course_ref = db.collection(u'courses').document(file_name)
    course_ref.set({
        'title': title,
        'author': author,
        'date': date,
        'video_src': video_src,
        'video_embed_src': video_embed_src,
        'course_name': course_name,
        'course_slogan': course_slogan,
        'course_description': course_description,
        'chapters': chapters,
        'course_descriptions': course_descriptions
    })

    return 'Курс успешно добавлен и сохранен в Firestore.'

if __name__ == '__main__':
<<<<<<< HEAD
    app.run(debug=True)
=======
    app.run(debug=True)
=======
>>>>>>> e5ca80b3b42761bd9f9d994e59ad94e4617d7db5
>>>>>>> 92dec27fdf3ebcb1f8ae0a00c18d5f3e95d36a79
