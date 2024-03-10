from flask import Flask, render_template, request
import os
from docx import Document
import re

app = Flask(__name__)

# Путь к папке, где будут сохраняться документы
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Страница добавления курсов
@app.route('/add_course', methods=['GET', 'POST'])
def add_course():
    if request.method == 'POST':
        # Получаем загруженный файл
        file = request.files['file']
        if file:
            # Сохраняем файл
            filename = file.filename
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)
            # Парсим документ и извлекаем лекции и ссылки на видео
            lectures, video_link = parse_document(filepath)
            return render_template('show_lectures.html', lectures=lectures, video_link=video_link)
    return render_template('add_course.html')

# Функция для парсинга документа Word
def parse_document(filepath):
    doc = Document(filepath)
    lectures = []
    lecture = {'title': '', 'content': ''}
    video_link = None
    for paragraph in doc.paragraphs:
        if paragraph.text.startswith('<TITLE>'):
            lecture['title'] = paragraph.text.replace('<TITLE>', '').replace('</TITLE>', '')
        elif paragraph.text.startswith('<LECTURE>'):
            lecture['content'] = paragraph.text.replace('<LECTURE>', '').replace('</LECTURE>', '')
            lectures.append(lecture.copy())
            lecture = {'title': '', 'content': ''}
        elif paragraph.text.startswith('<YOUTUBE>'):
            # Извлекаем ссылку на YouTube видео из тега <YOUTUBE>
            match = re.search(r'<YOUTUBE>(.+)</YOUTUBE>', paragraph.text)
            if match:
                video_link = match.group(1)
    return lectures, video_link

if __name__ == '__main__':
    app.run(debug=True)
