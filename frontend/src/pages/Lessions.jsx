import React, { useEffect, useState } from 'react';
import Lession from '../components/Lession';
import SideBar from '../components/Sidebar/SideBar';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

function Lessions() {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [foundCourse, setFoundCourse] = useState([]); // Используйте useState для хранения найденных курсов

  useEffect(() => {
    const collectionRef = collection(db, 'courses');
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() }); // Включаем id документа в объект
      });
      setCourse(items);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (course.length > 0) {
      const filteredCourse = course.filter((item) => item.courseId == courseId);
      setFoundCourse(filteredCourse); // Обновляем состояние найденного курса
    }
  }, [course, courseId]);

  console.log(foundCourse);

  return (
    <>
      <SideBar />

      {foundCourse.map((item) => (
        <div key={item.courseId} className="lession">
          <h1>{item.title}</h1>
          <p className="author">
            автор: {item.author} / {item.date}
          </p>
          <div className="chapter">
            <div className="chapter-title">
              <h2>Лекция: Введение в Prompt Engineering</h2>
            </div>
            <div className="chapter-content">
              <p id="toggleContent">{item.course_description}</p>
            </div>
          </div>

          {item.chapters &&
            item.chapters.map((chapter, index) => (
              <div className="chapter" key={index}>
                <div className="chapter-title">
                  <h2>
                    Часть {index + 1} {chapter.title}
                  </h2>
                </div>
                <div className="chapter-content">
                  {/* <h3 className="subtitle">1.1 Определение</h3> */}
                  <p>{chapter.content}</p>
                </div>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

export default Lessions;
