import React from 'react';
import Lession from '../Lession';
import { Link } from 'react-router-dom';
import querySnapshot from './courseData';

const Course = () => {
  // console.log(querySnapshot);
  return (
    <div className="workshop">
      <h1 className="workshop-name">
        Prompt Engineering
        <br />
        <span className="workshop-name-sub">Введение в Prompt Engineering</span>
      </h1>
      <img src="img/flutter.svg" alt="" className="workshop-img" />

      <div className="workshop-description-textlist">
        <div className="workshop-description-text">
          <i className="fa-solid fa-check"></i>
          <p className="description-text">Знакомство с Prompt Engineering</p>
        </div>
        <div className="workshop-description-text">
          <i className="fa-solid fa-check"></i>
          <p className="description-text">Краткая история развития</p>
        </div>
        <div className="workshop-description-text">
          <i className="fa-solid fa-check"></i>
          <p className="description-text">Принципы Prompt Engineering</p>
        </div>
        <div className="workshop-description-text">
          <i className="fa-solid fa-check"></i>
          <p className="description-text">Применение Prompt Engineering в реальной жизни</p>
        </div>
        <div className="workshop-description-text">
          <i className="fa-solid fa-check"></i>
          <p className="description-text">Тенденции и будущее</p>
        </div>
        <Link to="/lessions">
          <button className="workshop-subscribe-btn">Перейти</button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
