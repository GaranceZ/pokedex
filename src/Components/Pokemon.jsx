import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pokedex from "../Services/pokedex";
import {Link} from 'react-router-dom';
import '../Styles/pokemonCard.css';

const Pokemons = ({pokemon}) => {

    
    return <>
        <Card className={"col-3"}>
            <Link to={"/pokemon/details/"+ pokemon.url.substring(41).replaceAll( "/", "")}>
            <Card.Img variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.url.substring(41).replaceAll( "/", "") + ".png"}/>
            <Card.Body>
                <Card.Title className={"text-center"}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)} #{pokemon.url.substring(41).replaceAll( "/", "")}</Card.Title>
            </Card.Body>
            </Link>
        </Card>
    </>;
};

//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' 
export default Pokemons;