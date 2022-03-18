import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render }  from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'

render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
        <Route path="about" element={<App />} />
        <Route path="resume" element={<App />} />
        <Route path="projects" element={<Projects />} />
      <Route path="contact-me" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
