import React, { useState, useEffect } from 'react';
import pokedexRegionServices from '../Services/pokedexRegionServices';
import NavbarPokemon from '../Components/NavbarPokemon';
import { useParams } from 'react-router-dom';
import Pokemons from "../Components/Pokemon";
import Loading from "../Components/Loading";

const PokemonByPokedex = () => {

    const {id} = useParams();
    const [pokePokedex, setPokePokedex] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonByPokedex = async () => {
        try {
            //const response = await pokedexRegionServices.getPokedex(id);
            const res = await pokedexRegionServices.getPokedexById(id);
            const tabName = [];
            for (var i = 0; i < res.data.pokemon_entries.length; i++) {
                var name = res.data.pokemon_entries[i].pokemon_species;
                tabName.push(name);
              }
            tabName.sort((firstItem, secondItem) =>
            firstItem.url.substring(41).replaceAll( "/", "") - secondItem.url.substring(41).replaceAll( "/", ""))
            //console.log(tabName);
            setPokePokedex(tabName);
            setLoading(false)
            //console.log(res.data.pokemon_entries);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPokemonByPokedex()
    }, []);

   


    return <>
        <NavbarPokemon/>
        {loading === false ? <>
        <div className={"d-flex flex-wrap justify-content-center gap-2 "}>
        {pokePokedex != undefined && pokePokedex.map(pokedexPage => {
            return <>
            <Pokemons key={pokedexPage.name} pokemon={pokedexPage}/>
            </>
        })}
        </div>
        </>:<Loading/>}
        </>
     

    }
export default PokemonByPokedex;