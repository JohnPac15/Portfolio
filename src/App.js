import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Beach from './assets/img/Beach.jpeg'
import SA from './assets/img/SA.png'
import { Container,Row} from 'react-bootstrap'

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
          <main>
          <Container className="mb-3">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <img src={SA} className="d-block w-100" alt="..."/>
                  </div>
                </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Container>
            <div>
              {renderPage()}
            </div>
          </main>
        <Footer />
    </div>
  );
}

export default App;
