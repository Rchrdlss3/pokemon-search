import { useRef,useEffect, useContext } from "react"
import { PokemonContext } from "../App";


export default function PokeAudioComponent(){
    const [pokemon,setPokemon] = useContext(PokemonContext);
    const audioRef = useRef();

    const updateSong = audioSource => {
        audioRef.current.load();
    }

    useEffect(() => {
        updateSong()
    },[pokemon])
    
    return (
        <div>
            <audio controls ref = {audioRef}>
                <source src = {pokemon.cries.latest} type="audio/ogg"/>
            </audio>
        </div>
    )
}