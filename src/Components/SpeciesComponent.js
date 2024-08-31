import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../App";
import { fetchSpecies } from "../Functions/PokeAPIFunctions";

export default function SpeciesComponent(){
    const [pokemon,setPokemon] = useContext(PokemonContext);
    const [species,setSpecies] = useState({})
    
    useEffect(() => {
        if (pokemon.species) {
            fetchSpecies(pokemon.species.url)    
            .then(data => setSpecies(data)) 
        }
    }, [pokemon])

    return (
        <div style = {{
            width: '100vw',
            textAlign: 'center'
            }}>
            <p>{species.flavor_text_entries ? species.flavor_text_entries[Math.floor(Math.random()*species.flavor_text_entries.length)].flavor_text: null}</p>
        </div>
    ) 
}