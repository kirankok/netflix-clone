import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [ show, handleShow ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21"
        className="nav__logo"
        alt="Netflix Logo"
      />
      <img
        src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21"
        className="nav__logo"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
