import React, { useState } from "react";

function Nav(props){
  const{
    contactSelected,
    setContactSelected
  } = props


    return(
      <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" 
        aria-current="page" 
        href="/"
        onClick={() => setContactSelected(false)}
        >Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" 
        href="#about"
        onClick={() => setContactSelected(false)}
        >About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"
        href="#projects" 
        onClick={() => {
          setContactSelected(true)
        }}
        >Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"
        href="https://www.cakeresume.com/s--P8whv9M29KklyZkAMjdHSg--/john-pacini"
        target="_blank"
        onClick={() => setContactSelected(true)}
        >Resume</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"
        onClick={() => setContactSelected(true)}
        >Contact Me</a>
      </li>
    </ul>
    )
}

export default Nav;