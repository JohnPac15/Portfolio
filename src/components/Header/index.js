import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from '../Nav'

function Header(props){
    const{
        contactSelected,
        setContactSelected
      } = props

    return(
        <Container className='sticky-top'>
            <header>
                <Nav 
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                />
            </header>

        </Container>
    )
}
export default Header