import "../scss/App.scss";
import CharacterList from "./CharacterList";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";
import Filters from "./filters/Filters";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

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

  const { pathname } = useLocation();
  const routeData = matchPath("/character/:idCharacter", pathname);

  const idCharacter =
    routeData !== null ? String(routeData.params.idCharacter) : null;

  console.log(idCharacter);

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
              </>
            }
          />
          <Route path="/character/:idCharacter" element={<CharacterDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
