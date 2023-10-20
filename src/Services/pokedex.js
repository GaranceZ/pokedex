import axios from "axios";

function getPokemon(pokemonAffiche, pokemonPerPage){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?offset=" + pokemonAffiche + "&limit=" + pokemonPerPage)
}
function getPokemonById(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
}

function getPokemonByType(id) {
    return axios.get ("https://pokeapi.co/api/v2/pokemon/"+id)
}

function getAllPokemons() {
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?limit=1200")
}


export default {
    getPokemon,
    getPokemonById,
    getPokemonByType,
    getAllPokemons,
}