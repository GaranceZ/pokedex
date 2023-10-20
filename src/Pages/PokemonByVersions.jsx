import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import generationsServices from '../Services/generationsServices';
import versionsServices from '../Services/versionsServices';
import Loading from "../Components/Loading";
import Pokemons from "../Components/Pokemon"
import NavbarPokemon from '../Components/NavbarPokemon';

const PokemonByVersions = () => {

    const {version} = useParams();
    const {id} = useParams();
    const{name} = useParams()
    const [verPoke, setVerPoke] = useState([]);
    const [verGroup, setVerGroup] = useState([]);
    const [genPoke, setGenPoke] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchGetPokemonByVer = async () => {
        try {
            const response = await versionsServices.getVersionsById(version);
            const res = await versionsServices.getVersionsGroup(response.data.version_group.name);
            const res2 = await versionsServices.getGenerationsById(res.data.generation.name);
            res2.data.pokemon_species.sort((firstItem, secondItem) =>
            firstItem.url.substring(41).replaceAll( "/", "") - secondItem.url.substring(41).replaceAll( "/", ""))
            setVerPoke(res2.data.pokemon_species);
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        fetchGetPokemonByVer()
    }, []);
    
    return ( 
        <>
        <NavbarPokemon/>
        <div className={"d-flex flex-wrap justify-content-center gap-2 "}>
        {verPoke != undefined && verPoke.map(verPage => {
            return <>
            <Pokemons key={verPage.name} pokemon={verPage}/>
            </>
        })}
        </div>
        </>
     );
}
 
export default PokemonByVersions;