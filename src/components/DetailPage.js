import React, { useEffect, useState, useRef } from 'react';
import './DetailPage.css';

const DetailPage = () => {
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = useRef(null);
  const cardCount = 400;
  const dotCount = 3;

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const end = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const start = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {
      const cardWidth = slider.scrollWidth / (cardCount + 2); // +2 for cloned cards
      const index = Math.round(slider.scrollLeft / cardWidth);
      setActiveDot(index % dotCount);

      if (slider.scrollLeft >= slider.scrollWidth - cardWidth) {
        slider.scrollLeft = cardWidth; // Jump to the first original card
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth - 2 * cardWidth; // Jump to the last original card
      }
    };

    slider.addEventListener('mousedown', start);
    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('mousemove', move);
    slider.addEventListener('scroll', handleScroll);

    return () => {
      slider.removeEventListener('mousedown', start);
      slider.removeEventListener('mouseleave', end);
      slider.removeEventListener('mouseup', end);
      slider.removeEventListener('mousemove', move);
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [cardCount, dotCount]);

  return (
    <>
      <div className='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='portfolio-col-1'>
              <span>WHAT WE DO</span>
              <h1>SERVICES PROVIDE FOR YOU</h1>
            </div>
            <div className='portfolio-col-2'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
          <div className='work'>
            <div className='slider' ref={sliderRef}>
              {[...Array(cardCount + 2)].map((_, index) => {
                const actualIndex = index === 0 ? cardCount - 1 : index === cardCount + 1 ? 0 : index - 1;
                return (
                  <div className='card' key={index}>
                    <div className='img'>
                      <img src={`/img/${(actualIndex % 3) + 1}-2.png`} alt='img' draggable="false" />
                    </div>
                    <div className='layer'>
                      <img src='/icons/icon.svg' alt='icon' />
                      <h3>WEB DEVELOPMENT</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?</p>
                      <a className="btn" target="_blank" rel="noreferrer" href="https://www.fylehq.com/">READ MORE <img className="arrow" src="/icons/arrow.svg" alt="" /></a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='dot-container'>
              {[...Array(dotCount)].map((_, index) => (
                <div key={index} className={`dot ${activeDot === index ? 'red-dot' : 'black-dot'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
