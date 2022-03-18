import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
import { Container,Row} from 'react-bootstrap'

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Header 
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>
          <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <Row>
                <h1 className="header p-5 mb-4 bg-light rounded-3">Welcome</h1>
                </Row>
              </Container>
            <Container>
              <About />
            </Container>
          </Container>
      </main>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
}

export default App;
