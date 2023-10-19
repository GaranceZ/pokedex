import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/esm/Image';
import { useParams } from 'react-router-dom';
import generationsServices from '../Services/generationsServices';
import Generations from './Generations';



function NavbarPokemon() {
  const {id} = useParams();
  const [generations, setGenerations] = useState({});
  const fetchGenerations = async () => {
    try {
        const response = await generationsServices.getGenerations(id)
        setGenerations(response.data)
    } catch (e) {
        console.log(e)
    }
}

useEffect(() => {
  fetchGenerations()
}, []);


  return (
    <Navbar sticky="top" expand="lg" className="bg-light">
      <Container>
        <Image src="https://icon-library.com/images/pokedex-icon/pokedex-icon-21.jpg" width="40" height="40" href=""/>
        <Navbar.Brand href="">Pokédex du pauvre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Pokemons</Nav.Link>
            <NavDropdown title="Générations" id="basic-nav-dropdown">
              <>
                {generations.results != undefined && generations.results.map(gen => {
                  return <NavDropdown.Item href={"/pokemon/generation/" + gen.name }>
                    {gen.name}
                  </NavDropdown.Item>
                
                })}
              </>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarPokemon;
