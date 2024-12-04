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
      <img src="../../img/logoSinFondo.png" alt="logo" className="logo" />
    </a>
   
    <div className="contact-buttons">
  
      <a href="https://www.facebook.com/share/sd8ok8dScFDe35aE/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="contact-icon">
       <img className='iconosContacto' src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook"></img>
       <img className='iconosContactoBN'src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebookBN"></img>
      </a>
    
      <a href="https://www.instagram.com/simpletecnoapp?igsh=cHc0aWkxNWZoYTd1" target="_blank" rel="noopener noreferrer" className="contact-icon">
       <img className='iconosContacto' src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram"></img>
       <img className='iconosContactoBN'src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagramBN"></img>
      </a>
  
      <a href="mailto:contacto@simpletecno.com.ar" className="contact-icon">
       <img className='iconosContacto' src="https://img.icons8.com/fluency/48/apple-mail.png" alt="mail"></img>
       <img className='iconosContactoBN' src="https://img.icons8.com/ios/50/mail.png" alt="mailBN"></img>
      </a>
  
    </div>
  </header>
  );
};