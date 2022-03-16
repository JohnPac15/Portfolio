import React from 'react';

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
        href="#"
        >Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" 
        href="#about"
        onClick={() => setContactSelected(false)}
        >About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" 
        href="#"
        onClick={() => setContactSelected(true)}
        >Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link 
        disabled"
        onClick={() => setContactSelected(true)}
        >Contact Me</a>
      </li>
    </ul>
    )
}

export default Nav;