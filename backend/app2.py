from flask import Flask, render_template
from flask import Flask, render_template

app = Flask(__name__)

def convert_to_embed_url(video_url):
    return video_url.replace("watch?v=", "embed/")

@app.route('/')
def index():
    # Чтение данных из файла
    courses = []
    with open('courses.txt', 'r', encoding='utf-8') as file:
        course = {}
        for line in file:
            if line.strip():
                key, value = line.strip().split(': ')
                if key == 'Title':
                    course['title'] = value
                elif key == 'Author':
                    course['author'] = value
                elif key == 'Date':
                    course['date'] = value
                elif key == 'Video Source':
                    video_src = value.strip()
                    video_embed_src = convert_to_embed_url(video_src)
                    course['video_embed_src'] = video_embed_src
                elif key.startswith('Chapter Title'):
                    course.setdefault('chapters', []).append({'title': value})
                elif key.startswith('Chapter Content'):
                    course['chapters'][-1]['content'] = value
            else:
                courses.append(course)
                course = {}
        if course:
            courses.append(course)

    return render_template('courseview.html', courses=courses)

if __name__ == '__main__':
    app.run(debug=True,port=5001)
