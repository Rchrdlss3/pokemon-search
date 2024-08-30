import { useEffect, useState } from "react"
import { pokeDisplayStyle } from "../Functions/PokemonThemes"
import { getBackgroundColor } from "../Functions/ExtractColorsFunctions"
import SearchComponent from "./SearchComponent";
import { pokeAssetsURL } from "../Helpers/constants";
import PokeInfoComponent from "./PokeInfoComponent";
import PokemonNameComponent from "./PokemonNameComponent";

export default function PokemonDisplay({pokemon}) {
    const imageSource = pokemon.sprites.other['official-artwork'].front_default
    const [backgroundColor,setBackgroundColor] = useState('');

    useEffect(() => {
        getBackgroundColor(imageSource)
        .then(color => setBackgroundColor(color))
    },[pokemon])

    return (
        <div style = {pokeDisplayStyle(backgroundColor)}>
            {pokemon.name ? <PokemonNameComponent name = {pokemon.name}/> : null}
            <SearchComponent />
            <div style = {{width:200, height: 200, padding: 0, maring:0}}>
            <img width = {200} src = {imageSource}/>
            </div>
            <div>
            <h3>Type(s):</h3>
            <div style = {{display: 'flex'}}>
            {pokemon.types ? pokemon.types.map((type) =>  <p style = {{margin: '5px', textTransform: 'capitalize'}}> {type.type.name} </p>) : null}
            </div>
            </div>
            <PokeInfoComponent />
        </div>
    )
}