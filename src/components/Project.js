import React, { useState, useEffect } from 'react';
import './Project.css';

const Project = () => {
  const [images, setImages] = useState([
    'img/image.png',
    'img/image2.png',
    'img/image3.png',
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change image after a certain period (in milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const changeImage = (imageUrl, index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="project">
          <div className="project-heading">
            <span>OUR PROJECT</span>
            <h1>WHY WE ARE BEST</h1>
          </div>
          <div className="row">
            <div className="project-col-1">
              <div className="photos">
                <img id="mainImage" src={images[currentIndex]} alt="" />
              </div>
            </div>
            <div className="project-col-2">
              <div
                className={`about-photos grey ${currentIndex === 0 ? 'selected' : ''} ${currentIndex === 0 ? 'red-background' : ''}`}
                onClick={() => changeImage('img/image.png', 0)}
              >
                <h3>Genderless Kei - Japan's Hot</h3>
                <p>
                  Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of...
                </p>
              </div>
              <div
                className={`about-photos grey ${currentIndex === 1 ? 'selected' : ''} ${currentIndex === 1 ? 'red-background' : ''}`}
                onClick={() => changeImage('img/image2.png', 1)}
              >
                <h3>Better Strategy & Quality</h3>
                <p>
                  Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of...
                </p>
              </div>
              <div
                className={`about-photos grey ${currentIndex === 2 ? 'selected' : ''} ${currentIndex === 2 ? 'red-background' : ''}`}
                onClick={() => changeImage('img/image3.png', 2)}
              >
                <h3>Genderless Kei - Japan's Hot</h3>
                <p>
                  Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
