import React, {useEffect, useState} from 'react';
import {Navigate, useLocation, useParams} from 'react-router-dom'
import pokedex from "../Services/pokedex";
import Loading from "../Components/Loading";
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/esm/CardText';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import PokemonInfos from '../Components/PokemonInfos';
import PokemonGraph from "../Components/PokemonGraph";
import PokemonWeakness from '../Components/PokemonWeakness';
import PokemonTypes from '../Components/PokemonTypes';
import NavbarPokemon from '../Components/NavbarPokemon';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';



const PokemonDetails = () => {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [type, setType] = useState({});

    const [loading, setLoading] = useState(true);

    const fetchPokemonById = async () => {
        try {
            const response = await pokedex.getPokemonById(id)
            setPokemon(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchPokemonByType= async () => {
        try {
            const response = await pokedex.getPokemonByType(id)
            setType(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemonById()
        fetchPokemonByType()
    }, []);

    return <>
    <NavbarPokemon/>
    <Container className={"d-flex flex-column"}>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary"><Nav.Link href={"/pokemon/details/" + (parseInt(id) - parseInt(1))}>Précédent</Nav.Link></Button>
                <Button variant="secondary"><Nav.Link href={"/pokemon/details/" + (parseInt(id) + parseInt(1))}>Suivant</Nav.Link></Button>
            </ButtonGroup>
        {loading === false ? <>
        <div>
            <h1 className={"text-center"}>{pokemon.names != undefined && pokemon.names[4].name.charAt(0).toUpperCase() + pokemon.names[4].name.substring(1)} N°{id}</h1>
        </div>
        <div className={"d-flex gap-3"}>
            <div>
                <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"}/>
                <PokemonGraph stats={type.stats != undefined && type.stats}/>
            </div>
        <div>
                <p>{pokemon.flavor_text_entries[16].flavor_text !=undefined && pokemon.flavor_text_entries[16].flavor_text}</p>
            <PokemonInfos height={type.height} weight={type.weight}/>
                <div>
                    <div className={"d-flex"}>
                    <PokemonTypes types={type.types != undefined && type.types}/>
                    </div>
                </div>
                <div>
                {type.types != undefined && type.types.map(t => {
                        return <PokemonWeakness type={t} />
                    })}
                </div>
            </div>
        </div>
        </> : <Loading/>}
        </Container>
    </>;
}
 
export default PokemonDetails;