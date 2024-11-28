import "../scss/App.scss";
import CharacterList from "./CharacterList";
//import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <>
      <header>
        <h1>Rick And Morty</h1>
      </header>
      <main>
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;
