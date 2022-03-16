import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Breadcrumb, Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

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
              <h1 className="header p-5 mb-4 bg-light rounded-3">Welcome</h1>
            </Container>
          </Container>

        ): (
          <h1>IT WORKS!!!!!</h1>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
