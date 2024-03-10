from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('add_course.html')

@app.route('/add_course', methods=['POST'])
def add_course():
    title = request.form['title']
    author = request.form['author']
    date = request.form['date']
    video_src = request.form['video_src']

    chapters = []
    for key, value in request.form.items():
        if key.startswith('chapter_title_'):
            chapter_num = key.split('_')[-1]
            chapter_title = value
            chapter_content = request.form[f'chapter_content_{chapter_num}']
            chapters.append({'title': chapter_title, 'content': chapter_content})

    # Сохраняем данные в файл
    with open('courses.txt', 'a') as file:
        file.write(f"Title: {title}\nAuthor: {author}\nDate: {date}\nVideo Source: {video_src}\n")
        for chapter in chapters:
            file.write(f"Chapter Title: {chapter['title']}\nChapter Content: {chapter['content']}\n")
        file.write('\n')

    return 'Курс успешно добавлен и сохранен в файл.'

if __name__ == '__main__':
    app.run(debug=True)
