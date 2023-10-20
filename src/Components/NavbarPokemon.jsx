import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/esm/Image';
import { useParams } from 'react-router-dom';
import generationsServices from '../Services/generationsServices';
import versionsServices from '../Services/versionsServices';
import pokedexRegionServices from '../Services/pokedexRegionServices';
import Generations from './Generations';
import '../Styles/dropDown.css'


function NavbarPokemon() {
  const {id} = useParams();
  const [generations, setGenerations] = useState([]);
  const [versions, setVersions] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const fetchGenerations = async () => {
    try {
        const response = await generationsServices.getGenerations(id)
        setGenerations(response.data)
    } catch (e) {
        console.log(e)
    }
}

const fetchVersions = async () => {
  try{
    const response = await versionsServices.getVersions()
    setVersions(response.data);
  } catch (e) {
    console.log(e);
  }
}

const fetchPokedex = async () => {
  try{
    const response = await pokedexRegionServices.getPokedex()
    setPokedex(response.data);
  }catch(e){
    console.log(e);
  }
}

useEffect(() => {
  fetchGenerations()
  fetchVersions()
  fetchPokedex()
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
            <NavDropdown title="Versions" id="basic-nav-dropdown2">
              <>
                {versions.results != undefined && versions.results.map(ver => {
                  return <NavDropdown.Item href={"/pokemon/version/" + ver.url.substring(33).replaceAll( "/", "") }>
                    {ver.name}
                  </NavDropdown.Item>
                })}
              </>
            </NavDropdown>
            <NavDropdown title="Pokedex" id="basic-nav-dropdown2">
              <>
                {pokedex.results != undefined && pokedex.results.map(pok => {
                  return <NavDropdown.Item href={"/pokemon/pokedex/" + pok.url.substring(33).replaceAll( "/", "")}>
                    {pok.name}
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
