import "../scss/App.scss";
import CharacterList from "./CharacterList";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";
import Filters from "./filters/Filters";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(""); //he añadido true para el condicional

  useEffect(() => {
    getCharactersFromApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);
  //PREGUNTAR A ANA
  const handleFilterName = (valueInput) => {
    setFilterName(valueInput);
  };
  //Condicional ternario para el mensaje de no aparece el texto
  const message = filterName ? "" : "No hay filtro activo";
  console.log(message);

  const filteredNameCharacter = characters.filter((nameCharacter) => {
    return nameCharacter.name.toLowerCase().includes(filterName.toLowerCase());
  });
  console.log(filteredNameCharacter);

  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname);

  const urlId = routeData !== null ? routeData.params.idCharacter : null;
  //console.log(idCharacter);

  const idStr = String(urlId);
  //creamos la funcion para transformar a string

  const character = characters.find((character) => {
    return String(character.id) === idStr;
    //así nos aseguramos que es string
  });
  //console.log(character);

  return (
    <>
      <header>
        <h1>Rick And Morty</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onChangeName={handleFilterName} />
                <CharacterList characters={filteredNameCharacter} />
                <p>{message}</p>
              </>
            }
          />
          <Route
            path="/character/:idCharacter"
            element={<CharacterDetail character={character} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
