import React from 'react';
import img from '../assets/img/introOnlineTeacher.png';

const Intro = () => {
  return (
    <div className="wrapper">
      <div className="center_content">
        <h1>Become a Proffessional in Your sector</h1>
        <img src={img} />
      </div>
    </div>
  );
};

export default Intro;
