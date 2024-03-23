import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courseSelector } from '../redux/slices/courseSlice';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { setCourses } from '../redux/slices/courseSlice';
import { useParams } from 'react-router-dom';

const Course = () => {
  const [foundCourse, setFoundCourse] = useState([]);
  const { courses } = useSelector(courseSelector);
  const dispatch = useDispatch();
  const { courseId } = useParams();

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

  console.log(foundCourse);

  return <div className="wrapper">{courseId}</div>;
};

export default Course;
