import React from 'react';

const CourseBox = ({ ...rest }) => {
  const { title, course_name, author, date } = rest;
  return (
    <div className="courseBox">
      <div className="topContent">
        <h3>{title}</h3>
      </div>
      <div className="bottomContent">
        <p className="courseName">{course_name}</p>
        <p className="author">{author}</p>
        <p className="courseDate">{date}</p>
      </div>
    </div>
  );
};

export default CourseBox;
