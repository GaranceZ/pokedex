import axios from "axios";

function getPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon")
}
function getPokemonById(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
}

export default {
    getPokemon,
    getPokemonById
}