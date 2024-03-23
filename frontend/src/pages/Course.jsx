import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courseSelector } from '../redux/slices/courseSlice';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { setCourses } from '../redux/slices/courseSlice';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { courses } = useSelector(courseSelector);
  const dispatch = useDispatch();

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
  console.log(courses);
  let { courseId } = courses;
  return <div className="wrapper">{courseId}</div>;
};

export default Course;
