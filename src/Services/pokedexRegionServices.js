import axios from "axios"


function getPokedex(){
    return axios.get("https://pokeapi.co/api/v2/pokedex/?limit=50")
}

function getPokedexById(id){
    return axios.get("https://pokeapi.co/api/v2/pokedex/" + id)
}


export default {
    getPokedex,
    getPokedexById
}