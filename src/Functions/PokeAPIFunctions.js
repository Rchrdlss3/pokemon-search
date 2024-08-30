import { pokemonURL } from "../Helpers/constants";

export const fetchPokemon = async (pokemonName) => {
    const searchedPokemon = pokemonName.toLowerCase()
    try {
        const data = await fetch(`${pokemonURL}/pokemon/${searchedPokemon}`)
        const json = await data.json()
        return json
    } catch (e) {
        console.log(e)
    }
}

export const fetchSpecies = async (pokemonSpeciesURL) => {
    try {
        const data = await fetch(pokemonSpeciesURL)
        const json = await data.json()
        return json
    } catch (e) {
        console.log(e)
    }
}