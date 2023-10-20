import React, {useEffect, useState} from 'react';
import Pokemon from "../Services/pokedex";
import Pokemons from "../Components/Pokemon"
import pokedex from '../Services/pokedex';
import PaginationPerso from '../Components/Pagination';
import NavbarPokemon from '../Components/NavbarPokemon'; 

const HomePage = () => {

    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(21);
    const [totalPokemon, setTotalPokemon] = useState(0);
    const [maxPage, setMaxPage] = useState(20);
    const [searchValue, setSearchValue] = useState("");
    const [searchValueAll, setSearchValueAll] = useState("");
    const [pokemonFiltered, setPokemonFiltered] = useState([]);

    const fetchPokemons = async() => {
        try{
            //pokemonPerPage * (currentPage -1) => multiplie pokemon par page avec la pageCourante -1  ce qui signifie
            //que sur la page 1 on ferait 21 *(1-1), sur la page 2 => 21 *(2-1)
            let nombrePokemonAffiche = pokemonPerPage * (currentPage- 1);
            const response = await pokedex.getPokemon(nombrePokemonAffiche, pokemonPerPage);
            setTotalPokemon(response.data.count);
            setMaxPage(Math.ceil(response.data.count /pokemonPerPage));
            setPokemons(response.data.results);
            setPokemonFiltered(response.data.results);
        }catch (e){
            console.log(e);
        }
    }

    const fetchAllPokemons = async () => {
        try{
            const response = await pokedex.getAllPokemons()
            return response.data;
        }catch(e){
            console.log(e);
        }
    }

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value)
    }
    const handleChangeAll = (e) => {
        setSearchValueAll(e.currentTarget.value)
    }

    //useEffect(() => {
   //     fetchPokemons()
   // }, []);

    useEffect (()=>
    {
        fetchPokemons()
    }, [currentPage]);

    useEffect(() => {
        if(searchValue != null)
       {let res = pokemons.filter(poke => {
        return poke.name.startsWith(searchValue.toLowerCase())
       })
        setPokemonFiltered(res)
        }
       
    }, [searchValue])


    useEffect(() => {
        if(searchValueAll != null && searchValueAll!= ""){
            let res;
           fetchAllPokemons().then(response =>
            {res = response;
            let resFiltered = res.results.filter(poke => {
                return poke.name.startsWith(searchValueAll.toLowerCase())
               })
                setPokemonFiltered(resFiltered)
            });
           
        } else {
            fetchPokemons()
        }
        
    }, [searchValueAll])

    return <>
    <NavbarPokemon/>
    <h1 className={"text-center"}>Liste des Pokémons</h1>
    <div className={"col-3"}> 
    Recherche sur tous les pokemons: <input className={"form-control m-3"} value={searchValueAll} onChange={handleChangeAll}/>
    </div>
    <div className={"col-3"}> 
    Recherche sur la page courante : <input className={"form-control m-3"} value={searchValue} onChange={handleChange}/>
    </div>
    <div className={"d-flex flex-wrap justify-content-center gap-2 "}>
        {pokemonFiltered.map(p =>{
            return <Pokemons key={p.name} pokemon={p}/>
        })}
    </div>
    <div className={"d-flex justify-content-center"}>
        <PaginationPerso currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
    </div>
    
    </>
}
 
export default HomePage;
