import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { courseSelector, setCourses } from '../redux/slices/courseSlice';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { courses } = useSelector(courseSelector);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [selectedChapter, setSelectChapter] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const collectionRef = collection(db, 'courses');
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => doc.data());
      dispatch(setCourses(items));
    });

    return unsubscribe;
  }, [dispatch]);

  const currentCourse = courses.find((item) => item.courseId == courseId);

  const handleMouseEnter = () => setIsSidebarVisible(true);
  const handleMouseLeave = () => setIsSidebarVisible(false);

  const selectedChapterContent = currentCourse?.chapters.find(
    (item) => item.title == selectedChapter,
  )?.content;

  const nextChapter = () => {
    const currentIndex = currentCourse?.chapters.findIndex((item) => item.title == selectedChapter);
    if (currentIndex !== -1 && currentIndex < currentCourse?.chapters.length - 1) {
      setSelectChapter(currentCourse?.chapters[currentIndex + 1].title);
    }
  };

  return (
    <>
      <div className="courseLession">
        <div className="sidebar" onMouseLeave={handleMouseLeave}>
          <div className={`sideMenu ${isSidebarVisible ? 'sideMenu-visible' : ''}`}>
            <h3 className="course_name">{currentCourse?.course_name}</h3>
            {currentCourse?.chapters.map((item) => (
              <li
                className={`chapterItem ${selectedChapter === item.title ? 'active_chapter' : ''}`}
                key={item.title}
                onClick={() => setSelectChapter(item.title)}>
                {item.title}
              </li>
            ))}
          </div>
          <div className="sideHint" onMouseEnter={handleMouseEnter}>
            <p>{'>'}</p>
          </div>
        </div>

        <div className="wrapper">
          <h1>{selectedChapterContent}</h1>
          <button onClick={nextChapter}>Next Chapter</button>
        </div>
      </div>
    </>
  );
};

export default Course;
