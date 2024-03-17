import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ descriptions, title, slogan }) => {
  console.log(descriptions);
  return (
    <div className="workshop">
      <h1 className="workshop-name">
        {title}
        <br />
        <span className="workshop-name-sub">{slogan}</span>
      </h1>
      <img src="img/flutter.svg" alt="" className="workshop-img" />

      <div className="workshop-description-textlist">
        {descriptions.map((item) => (
          <div key={item} className="workshop-description-text">
            <i className="fa-solid fa-check"></i>
            <p className="description-text">{item}</p>
          </div>
        ))}

        <Link to="/lessions">
          <button className="workshop-subscribe-btn">Перейти</button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
