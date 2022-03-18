import React, { useState } from "react";

function Nav({ currentPage, handlePageChange }){


    return(
      <ul className="nav text-decoration-none text-dark">
      <li className="nav-item">
        <a className="nav-link active" 
        aria-current="page" 
        href="#home"
        >Home
        </a>
      </li>
      <li className="nav-item">
        <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
        href="#about"
        onClick={() => handlePageChange('About')}
        >About Me</a>
      </li>
      <li className="nav-item">
        <a className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'} 
        href="#projects"
        onClick={() => handlePageChange('Projects')}
        >Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"
        href="https://www.cakeresume.com/s--P8whv9M29KklyZkAMjdHSg--/john-pacini"
        target="_blank"
        onClick={() => handlePageChange('Home')}
        >Resume</a>
      </li>
      <li className="nav-item">
        <a className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} 
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        >Contact Me</a>
      </li>
    </ul>
    )
}

export default Nav;