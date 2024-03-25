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
    if "watch?v=" in video_url:
        video_id = video_url.split("watch?v=")[1]
        return f"https://www.youtube.com/embed/{video_id}"
    return video_url

def get_next_course_number():
    # Get the total number of documents in the 'courses' collection
    courses_ref = db.collection('courses')
    return len(courses_ref.get())

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
    
    chapters = []
    for key, value in request.form.items():
        if key.startswith('chapter_title_'):
            chapter_num = key.split('_')[-1]
            chapter_title = value
            chapter_content = request.form.get(f'chapter_content_{chapter_num}', '')
            
            # Fetching video links and text content for the chapter
            chapter_videos = []
            chapter_texts = []
            for sub_key, sub_value in request.form.items():
                if sub_key.startswith(f'chapter_video_{chapter_num}_'):
                    chapter_videos.append(sub_value)
                elif sub_key.startswith(f'chapter_text_{chapter_num}_'):
                    chapter_texts.append(sub_value)
            
            chapters.append({
                'title': chapter_title,
                'content': chapter_content,
                'videos': chapter_videos,
                'texts': chapter_texts
            })

    course_descriptions = []
    for key, value in request.form.items():
        if key.startswith('course_description_'):
            course_description_num = key.split('_')[-1]
            course_description = request.form.get(f'course_description_{course_description_num}', '')
            course_descriptions.append(course_description)

    # Get the courseId using the get_next_course_number function
    course_id = get_next_course_number()

    # Prepare data to be saved in Firestore
    data = {
        "title": title,
        "author": author,
        "date": date,
        "video_src": video_src,
        "video_embed_src": video_embed_src,
        "course_name": course_name,
        "course_slogan": course_slogan,
        "chapters": chapters,
        "course_descriptions": course_descriptions,
        "courseId": course_id  # Include courseId in the data
    }

    # Set data to Firestore with a unique document name
    doc_ref = db.collection('courses').document(f'course_{course_id}')
    doc_ref.set(data)

    return 'Курс успешно добавлен и сохранен в Firestore.'

if __name__ == '__main__':
    app.run(debug=True)
