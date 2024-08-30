import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../App";
import { fetchSpecies } from "../Functions/PokeAPIFunctions";
import SpecifesCarousel from "./SpeciesCarousel";

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
            display: 'flex',
            width: '50vw',
            height: '150px',
            overflowX: 'scroll'
            }}>
            {species.flavor_text_entries ? species.flavor_text_entries.map((fact) => {
            if (fact.language.name == 'en') { return <SpecifesCarousel fact = {fact}/>}
            }) : null} 
        </div>
    ) 
}