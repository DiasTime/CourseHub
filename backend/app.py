from flask import Flask, render_template, request

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

    chapters = []
    for key, value in request.form.items():
        if key.startswith('chapter_title_'):
            chapter_num = key.split('_')[-1]
            chapter_title = value
            chapter_content = request.form.get(f'chapter_content_{chapter_num}', '')
            chapters.append({'title': chapter_title, 'content': chapter_content})

<<<<<<< Updated upstream
    # Сохраняем данные в файл
=======
    course_descriptions = []
    for key, value in request.form.items():
        if key.startswith('course_description_'):
            course_description_num = key.split('_')[-1]
            course_description = value
            course_descriptions.append(course_description)
            

>>>>>>> Stashed changes
    with open('courses.txt', 'a', encoding='utf-8') as file:
        file.write(f"Title: {title}\nAuthor: {author}\nDate: {date}\nVideo Source: {video_src}\n")
        for chapter in chapters:
            file.write(f"Chapter Title: {chapter['title']}\nChapter Content: {chapter['content']}\n")
        file.write('\n')

    return 'Курс успешно добавлен и сохранен в файл.'

if __name__ == '__main__':
    app.run(debug=True)
