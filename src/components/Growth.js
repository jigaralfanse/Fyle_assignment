import React from 'react';
import './Growth.css';
const Growth = () => {
  return (
    <div id="stats">
      <div className="container">
        <div className="heading">
          <span>EXPERTS GROWTH</span>
          <h1>OUR COMPANY GROWTH</h1>
        </div>
        <div className="row mar-1">
          <div className="stats">
            <img src="/icons/heart (2).svg" alt="" />
            <h1>199+</h1>
            <p>Satisfied Customers</p>
          </div>
          <div className="stats">
            <img src="/icons/clock (3).svg" alt="" />
            <h1>1591+</h1>
            <p>Days Of Operation</p>
          </div>
          <div className="stats">
            <img src="/icons/Path 4402.svg" alt="" />
            <h1>283+</h1>
            <p>Complete Project</p>
          </div>
          <div className="stats">
            <img src="/icons/Path 4406.svg" alt="" />
            <h1>75+</h1>
            <p>Win Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
