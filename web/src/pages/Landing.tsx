import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import LogoImg from '../assets/images/logo.svg';

import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Logo Happy" />
  
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
