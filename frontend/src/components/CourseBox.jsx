import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CourseBox = ({ ...rest }) => {
  const { title, course_name, author, date, course_description, courseId } = rest;
  return (
    <Link to={`/courses/${courseId}`}>
      <div className="courseBox">
        <div className="topContent">
          <div className="fav">
            <IoMdHeartEmpty />
          </div>
          <h3>{title}</h3>
        </div>
        <div className="bottomContent">
          <p className="courseName">{course_name}</p>
          <p className="courseDesc">{course_description}</p>
          <div className="courseDetails">
            <p>
              {author} / {date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseBox;
