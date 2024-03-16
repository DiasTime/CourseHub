import React from 'react';
import rightWrapImage from '../assets/img/cover.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="right-wrapper">
        <img src={rightWrapImage} className="right-wrap-logo" />
      </div>
      <div className="wrappers">
        <div className="left-wrapper">
          <h1 className="left-wrapper-title">
            Откройте двери к знаниям с <span>CourseHub.</span>
          </h1>
          <p className="left-wrapper-subtitle">
            Добро пожаловать в CourseHub – ваше центральное место для управления курсами и ресурсами
            университета AIU! Мы создали эту платформу специально для студентов, чтобы облегчить
            ваше обучение и улучшить ваш опыт обучения.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
