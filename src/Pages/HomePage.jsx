import React, {useEffect, useState} from 'react';
import Pokemon from "../Services/pokedex";
import Pokemons from "../Components/Pokemon"

const HomePage = () => {

    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async() => {
        try{
            const response = await Pokemon.getPokemon();
            setPokemons(response.data.results);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, []);

    return <div className={"d-flex justify-content-center gap-2"}>
        {pokemons.map(p =>{
            return <Pokemons pokemon={p}/>
        })}
    </div>;
}
 
export default HomePage;
