import { createContext, useState } from 'react';
import './App.css';
import PokemonDisplay from './Components/PokemonDisplayComponent';
import { pokemonModel } from './Models/PokeAPIModel';
import { appStyle } from './Functions/PokemonThemes';
import SpeciesComponent from './Components/SpeciesComponent';

export const PokemonContext = createContext();

function App() {
  const [pokemon,setPokemon] = useState(pokemonModel);

  return (
    <div style = {appStyle()}>
      <PokemonContext.Provider value = {[pokemon,setPokemon]}>
      <PokemonDisplay pokemon = {pokemon}/>
      <SpeciesComponent />
      </PokemonContext.Provider >
    </div>
  );
}

export default App;
