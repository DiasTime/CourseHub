from flask import Flask, render_template
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = Flask(__name__)

# Initialize Firestore with your credentials
cred = credentials.Certificate("firestore.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def get_course_documents():
    courses_ref = db.collection('courses').get()
    return courses_ref

@app.route('/')
def index():
    courses = []
    course_documents = get_course_documents()
    for course_doc in course_documents:
        course_data = course_doc.to_dict()
        course_name = course_data.get('course_name', '')  # Assuming the key in Firestore is 'course_name'
        course_slogan = course_data.get('course_slogan', '')  # Assuming the key in Firestore is 'course_slogan'
        course_descriptions = [course_data.get(f'course_description_{i}', '') for i in range(1, 5)]  # Adjust as per your Firestore structure
        courses.append({'course_name': course_name, 'course_slogan': course_slogan, 'course_descriptions': course_descriptions})
    return render_template('available_courses.html', courses=courses)

if __name__ == '__main__':
    app.run(debug=True, port=5002)
