import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Row} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Header 
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
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

        ): (
          <div>
            <Projects></Projects>
          </div>
        )}
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
