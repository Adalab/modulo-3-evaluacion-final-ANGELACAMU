import "../scss/App.scss";
import CharacterList from "./CharacterList";
//import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";

function App() {
  useEffect(() => {
    getCharactersFromApi();
  }, []);

  return (
    <>
      <header>
        <h1>Rick And Morty</h1>
      </header>
      <main>
        <CharacterList />
      </main>
    </>
  );
}

export default App;
