import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courseSelector } from '../redux/slices/courseSlice';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { setCourses } from '../redux/slices/courseSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Course = () => {
  const [foundCourse, setFoundCourse] = useState([]);
  const { courses } = useSelector(courseSelector);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedChapter, setSelectChapter] = useState('');

  const handleMouseEnter = () => {
    setIsSidebarVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    const collectionRef = collection(db, 'courses');
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      dispatch(setCourses(items));
    });

    return () => {
      // Очистка подписки при размонтировании компонента
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    if (courses.length > 0) {
      const filteredCourse = courses.filter((item) => item.courseId == courseId);
      setFoundCourse(filteredCourse); // Обновляем состояние найденного курса
    }
  }, [courses]);

  const [currentCourse] = foundCourse;

  if (currentCourse) {
    console.log(currentCourse.chapters);
    var filteredChapter = currentCourse.chapters.filter((item) => item.title == selectedChapter);
  }

  return (
    <div className="courseLession">
      <div className="sidebar" onMouseLeave={handleMouseLeave}>
        <div className={`sideMenu ${isSidebarVisible ? 'sideMenu-visible' : ''}`}>
          {currentCourse &&
            currentCourse.chapters &&
            currentCourse.chapters.map((item) => (
              <li key={item.title} onClick={() => setSelectChapter(item.title)}>
                {item.title}
              </li>
            ))}
        </div>
        <div className="sideHint" onMouseEnter={handleMouseEnter}></div>
      </div>

      <div className="wrapper">
        <h1>{filteredChapter && filteredChapter[0].content}</h1>
      </div>
    </div>
  );
};

export default Course;
