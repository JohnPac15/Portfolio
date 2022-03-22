import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from '../Nav'

function Header({ currentPage, handlePageChange }){

    return(
        <Container className='sticky-top'>
            <header>
                <Nav 
                currentPage={currentPage} 
                handlePageChange={handlePageChange}
                
                />
            </header>

        </Container>
    )
}
export default Header