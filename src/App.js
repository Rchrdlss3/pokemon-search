import { createContext, useEffect, useState } from 'react';
import './App.css';
import PokemonDisplay from './Components/PokemonDisplayComponent';
import { pokemonModel } from './Models/PokeAPIModel';
import { appStyle } from './Functions/PokemonThemes';
import SpeciesComponent from './Components/SpeciesComponent';

export const PokemonContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [theme,setTheme] = useState({});
  const [pokemon,setPokemon] = useState(pokemonModel);

  useEffect(() => {
    setTheme({})
  },[]);
  
  return (
    <div style = {appStyle()}>
      <PokemonContext.Provider value = {[pokemon,setPokemon]}>
      <ThemeContext.Provider>
      <PokemonDisplay pokemon = {pokemon}/>
      <SpeciesComponent />
      </ThemeContext.Provider>
      </PokemonContext.Provider >
    </div>
  );
}

export default App;
