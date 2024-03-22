import React from 'react';
import laptop from '../assets/img/laptop.png';

const Description = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapperTwoCol">
          <div className="leftWrapper">
            <h2>Our Online Education Is Smart & Effective</h2>
            <p>
              Online Education can be a convenient and flexible option for students who are unab
              attend traditional in-person classes due to their location, schedule
            </p>
            <button className="startButton">Let,s Started</button>
          </div>
          <img src={laptop} />
        </div>
      </div>
    </>
  );
};

export default Description;
