import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage";
import Pokemon from "./Components/Pokemon";
import React, {useEffect} from "react";
import PokemonDetails from './Pages/PokemonDetails';
import Container from "react-bootstrap/Container"
import PokemonByGen from './Pages/PokemonByGen';
import PokemonByVersions from './Pages/PokemonByVersions';
import PokemonByPokedex from './Pages/PokemonByPokedex';

function App() {
  return <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/details/:id" element={<PokemonDetails />} />
        <Route path="/pokemon/generation/:id" element={<PokemonByGen/>}/>
        <Route path="pokemon/version/:version" element={<PokemonByVersions/>}/>
        <Route path="pokemon/pokedex/:id" element={<PokemonByPokedex/>}/>
      </Routes>
    </BrowserRouter>
  </Container>
}

export default App;
