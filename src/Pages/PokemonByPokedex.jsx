import React, { useState, useEffect } from 'react';
import pokedexRegionServices from '../Services/pokedexRegionServices';
import NavbarPokemon from '../Components/NavbarPokemon';
import { useParams } from 'react-router-dom';
import Pokemons from "../Components/Pokemon"

const PokemonByPokedex = () => {

    const {id} = useParams();
    const [pokePokedex, setPokePokedex] = useState({});

    const fetchPokemonByPokedex = async () => {
        try {
            //const response = await pokedexRegionServices.getPokedex(id);
            const res = await pokedexRegionServices.getPokedexById(id);
            
            setPokePokedex(res.data.pokemon_entries);
            console.log(res.data.pokemon_entries);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPokemonByPokedex()
    }, []);


    return ( 
        <>
        <NavbarPokemon/>
        <div className={"d-flex flex-wrap justify-content-center gap-2 "}>
        {pokePokedex.pokemon_species != undefined && pokePokedex.pokemon_species.map(pokedexPage => {
            return <>
            <Pokemons key={pokedexPage.name} pokemon={pokedexPage}/>
            </>
        })}
        </div>
        </>
     );
}
 
export default PokemonByPokedex;