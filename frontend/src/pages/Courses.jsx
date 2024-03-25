import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CourseBox from '../components/CourseBox';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

import { useDispatch, useSelector } from 'react-redux';
import { courseSelector, setCourses } from '../redux/slices/courseSlice';

function Courses() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { courses } = useSelector(courseSelector);

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

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div className="purpleBG">
      <div className="wrapper">
        <div className="inputField">
          <input
            type="text"
            placeholder="Search course..."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="courseList">
          {courses && courses.map((item) => <CourseBox key={item.title} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Courses;
