import React, { useEffect, useState } from 'react';
import Lession from '../components/Lession';
import SideBar from '../components/Sidebar/SideBar';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

function Lessions() {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);

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
      const foundCourse = course.filter((item) => item.courseId == courseId);
      console.log(foundCourse);
    }
  }, [course, courseId]);

  return (
    <>
      <SideBar />
      <div className="intro">
        <h1>Course Id {courseId}</h1>
      </div>
    </>
  );
}

export default Lessions;
