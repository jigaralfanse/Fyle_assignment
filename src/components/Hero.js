import React, { useState } from 'react';
import './Hero.css';
import ContactModal from './ContactModal';

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    
   }; 

  const closeModal = () => {
    setModalOpen(false);
    
   
  };

  return (
    <section>
      <div id="hero">
        <div className="hero-content">
          <h4>Award Winning</h4>
          <h1>Digital Marketing Agency</h1>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum.
          </p>
          <button className="btn-red" onClick={openModal}>
            Contact Us
          </button>
          {isModalOpen && (
            <>
              <ContactModal id='m' closeModal={closeModal} />
              <div id="overlay" onClick={closeModal}></div>
            </>
          )}
        </div>
        <img src="/img/hero.png" alt="woman in red hat" />
      </div>
    </section>
  );
};

export default Hero;
