/* eslint-disable no-unused-vars */
import React from 'react'
import {Container, Navbar, Nav, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo1 from '../images/logo1.png';

const Navbars = () => {
  return (
    <div>
              <Navbar bg="light" variant="light" >
        <Container>
        <Navbar.Brand href="#home">
           
            <Link to="/" >
            <img 
            src={logo1} 
            alt="Link as Image"
            width="300"
              height="100"
              className="d-inline-block align-top" />{' '}
            </Link>
           
          </Navbar.Brand>


            
          
          <Nav className="me-auto">
          <Button variant="outlined-light">
            <Link to="/individuals">Individuals</Link>
            </Button>
            
            <Button variant="outlined-light">
            <Link to="/teams" >Teams</Link>
            </Button>
            
            <Button variant="outlined-light">
            <Link to="/Enterprise" >Enterprise</Link>
            </Button>
          </Nav>
          <Button variant="outlined-light">
            <Link to="/contact" >Contact</Link>
            </Button>
        </Container>
      </Navbar>
    </div>
    )
    }
    
  

export default Navbars