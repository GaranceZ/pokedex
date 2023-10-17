import React from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Pokemons = ({pokemon}) => {
    return <>
        <Card className={"col-2"}>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"/>
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>
                    {pokemon.weight}
                </Card.Text>
                <Button variant="info">Voir plus sur {pokemon.name}</Button>
            </Card.Body>
        </Card>
    </>;
};

//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' 
export default Pokemons;