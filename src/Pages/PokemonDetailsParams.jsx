import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom'
import Pokemon from "../Services/pokedex";

const PokemonDetails = () => {

    const {id} = useParams();
    const [poke, setPoke] = useState([]);

    const fetchPokemonById = async () => {
        try{
            const response = await Pokemon.getPokemonById(id)
            console.log(response.data.flavor_text_entries);
        }catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPokemonById()
    }, [])

    return <>
    <h1>{poke.flavor_text_entries[24]}</h1>
    </>;
}
 
export default PokemonDetails;