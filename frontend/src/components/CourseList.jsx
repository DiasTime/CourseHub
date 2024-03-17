import { useContext } from 'react';
import Course from './Course';
import { CourseContext } from '../App';

const CourseList = () => {
  const { courses } = useContext(CourseContext);
  return (
    <div className="workshop-list-carousel">
      <h1 id="uroki">Доступные курсы:</h1>
      <div className="workshop-list">
        {courses.map((item) => (
          <Course
            key={item.course_slogan}
            descriptions={item.course_descriptions}
            title={item.title}
            slogan={item.course_slogan}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
