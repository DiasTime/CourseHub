import React from 'react';

import Course from './Course';

const CourseList = () => {
  return (
    <div className="workshop-list-carousel">
      <h1 id="uroki">Доступные курсы:</h1>
      <div className="workshop-list">
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
};

export default CourseList;
