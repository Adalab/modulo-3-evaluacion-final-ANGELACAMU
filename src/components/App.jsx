import "../scss/App.scss";
import CharacterList from "./CharacterList";
//import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";
import Filters from "./filters/Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilterName = (valueInput) => {
    setFilterName(valueInput);
  };

  const filteredNameCharacter = characters.filter((nameCharacter) => {
    return nameCharacter.name.toLowerCase().includes(filterName.toLowerCase());
  });
  console.log(filteredNameCharacter);

  return (
    <>
      <header>
        <h1>Rick And Morty</h1>
      </header>
      <main>
        <Filters onChangeName={handleFilterName} />
        <CharacterList characters={filteredNameCharacter} />
      </main>
    </>
  );
}

export default App;
