from flask import Flask, render_template, request
import os

app = Flask(__name__)

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
    course_description = request.form['course_description']

    course_descriptions = []
    for key, value in request.form.items():
        if key.startswith('course_description_'):
            course_description_num = key.split('_')[-1]
            course_description = value
            course_descriptions.append(course_description)
            
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
            course_description = value
            course_descriptions.append(course_description)
            

    with open('courses.txt', 'a', encoding='utf-8') as file:
        file.write(f"Title: {title}\nAuthor: {author}\nDate: {date}\nVideo Source: {video_src}\n")
        file.write(f"Course Name: {course_name}\nCourse Slogan: {course_slogan}\nCourse Description: {course_description}\n")
        for chapter in chapters:
            file.write(f"Chapter Title: {chapter['title']}\nChapter Content: {chapter['content']}\n")
        for i, description in enumerate(course_descriptions, start=1):
            file.write(f"Course Description {i}: {description}\n")
        file.write('\n')

    return 'Курс успешно добавлен и сохранен в файл.'

if __name__ == '__main__':
    app.run(debug=True)
