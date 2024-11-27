import React from 'react'
import './styles/navBar.css'

export const NavBar = () => {
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  
  return (
    <header className="header">
      <a href="/">
        <img src="../../img/logoBlanco2.jpg" alt="logo" className="logo" />
      </a>
    </header>
  );
};