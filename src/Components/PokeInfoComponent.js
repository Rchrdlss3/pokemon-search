import { useContext, useState, useEffect } from "react"
import { PokemonContext } from "../App"
import PokeAudioComponent from "./PokeAudioComponent";
import InfoCardComponent from "./InfoCardComponent";

export default function PokeInfoComponent(){
    const [pokemon,setPokemon] = useContext(PokemonContext);

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
        }} >
            {pokemon.cries ? <PokeAudioComponent/> : null}
        <div style = {{
            display: 'flex',
            alignItems: 'center'
            }}>
            <InfoCardComponent pokeInformation = {{name: 'Base Experience', stat: pokemon.base_experience}}/>
            <InfoCardComponent pokeInformation={{name: 'Height', stat: pokemon.height}} />
            <InfoCardComponent pokeInformation={{name: 'Weight', stat: pokemon.weight}} />
            <InfoCardComponent pokeInformation= {{name: 'Abilities', stats: pokemon.abilities}}/> 
        </div>
        </div>
    )
}