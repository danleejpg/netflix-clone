import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    /* only activate nav__black if show is true */
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          onClick={() => navigate('/')}
          className='nav__logo'
          src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
          alt=''
        />
        <img
          onClick={() => navigate('/profile')}
          className='nav__avatar'
          src='https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg'
          alt=''
        />
      </div>
    </div>
  );
}

export default Nav;
