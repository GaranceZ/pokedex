import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import generationsServices from '../Services/generationsServices';
import Loading from "../Components/Loading";
import Pokemons from "../Components/Pokemon"
import NavbarPokemon from '../Components/NavbarPokemon';

const PokemonByGen = () => {

    const {id} = useParams();
    const [genPoke, setGenPoke] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonByGen = async () => {
        try {
            const response = await generationsServices.getGenerationsById(id);
            response.data.pokemon_species.sort((firstItem, secondItem) =>
            firstItem.url.substring(41).replaceAll( "/", "") - secondItem.url.substring(41).replaceAll( "/", ""))
            setGenPoke(response.data);
            console.log(response.data);
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPokemonByGen()
    }, []);
    
    return ( 
        <>
        <NavbarPokemon/>
        <div className={"d-flex flex-wrap justify-content-center gap-2 "}>
        {genPoke.pokemon_species != undefined && genPoke.pokemon_species.map(genPage => {
            return <>
            <Pokemons key={genPage.name} pokemon={genPage}/>
            </>
        })}
        </div>
        </>
     );
}
 
export default PokemonByGen;