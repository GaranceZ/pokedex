import axios from "axios";

function getGenerations(){
    return axios.get("https://pokeapi.co/api/v2/generation/")
}

function getGenerationsById(id) {
    return axios.get ("https://pokeapi.co/api/v2/generation/" + id)
}

export default {
    getGenerations,
    getGenerationsById
}