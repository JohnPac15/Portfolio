import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import { Container,Row} from 'react-bootstrap'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  useEffect( () =>{
    document.title = currentPage
  })

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>
            {renderPage()}
          </div>
        <Footer />
    </div>
  );
}

export default App;
