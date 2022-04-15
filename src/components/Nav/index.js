import React, { useState } from "react";

function Nav({ currentPage, handlePageChange }){


    return(
      <ul className="nav m-2">
        <li className="nav-item">
          <a className="nav-link active text-dark" 
          aria-current="page" 
          href="/Portfolio"
          >Home
          </a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-dark'}
          href="#about"
          onClick={() => handlePageChange('About')}
          >About Me</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link text-dark'} 
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          >Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark"
          href="https://www.cakeresume.com/s--P8whv9M29KklyZkAMjdHSg--/john-pacini"
          target="_blank"
          onClick={() => handlePageChange('Home')}
          >Resume</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-dark'} 
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          >Contact Me</a>
        </li>
      </ul>
    )
}

export default Nav;