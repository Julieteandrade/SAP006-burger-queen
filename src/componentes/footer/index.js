import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <p className='footer-text'>
        Desenvolvido por&nbsp;
         <a href='https://github.com/Julieteandrade' title='GitHub' target="_blank" rel="noopener noreferrer" className='footer-link'>Juliete Andrade</a>
        &emsp;|&emsp;Copyright 2021
      </p>
    </footer>
  );
}

export default Footer;