import { useContext, useState } from "react"
import { fetchPokemon } from "../Functions/PokeAPIFunctions"
import { PokemonContext } from "../App";
import { pokeInputStyle,buttonStyle, pokeSearchWrapper } from "../Functions/PokemonThemes";

export default function SearchComponent() {
    const [pokemon,setPokemon] = useContext(PokemonContext);
    const [pokemonName,setPokemonName] = useState('');

    return (
        <div style = {pokeSearchWrapper()}>
            <input
            style = {pokeInputStyle()}
            type = "search"
            placeholder= "Enter your Pokemon"
            onChange = {(e) => setPokemonName(e.target.value)}
            onKeyDown={(e) => {
                if (e.key == 'Enter') {
                    fetchPokemon(pokemonName)
                    .then(data => setPokemon(data))
                }
            }}
            >
            </input>
            <button
            style = {buttonStyle()}
            onClick = {(e) => {
                fetchPokemon(pokemonName)
                .then(data => setPokemon(data))
            }}
            >
                Search
            </button>
        </div>
    )
}