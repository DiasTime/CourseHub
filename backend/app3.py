from flask import Flask, render_template
import os

app = Flask(__name__)

def get_course_files():
    course_files = []
    for file in os.listdir():
        if file.endswith('.txt'):
            course_files.append(file)
    return course_files

def read_course_info(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        course_info = {}
        for line in file:
            parts = line.strip().split(': ', 1)
            if len(parts) == 2:
                key, value = parts
                course_info[key] = value
        return course_info



@app.route('/')
def index():
    course_files = get_course_files()
    courses = []
    for file in course_files:
        file_path = os.path.join(file)
        course_info = read_course_info(file_path)

        course_name = course_info.get('course_name', '')
        course_slogan = course_info.get('course_slogan', '')
        course_descriptions = [course_info.get(f'course_description_{i}', '') for i in range(1, 5)]
        courses.append({'title': course_name, 'author': course_slogan, 'date': '', 'chapters': [{'title': f'Course Description {i}', 'content': desc} for i, desc in enumerate(course_descriptions, start=1)]})

    return render_template('available_courses.html', courses=courses)

if __name__ == '__main__':
    app.run(debug=True,port=5002)
