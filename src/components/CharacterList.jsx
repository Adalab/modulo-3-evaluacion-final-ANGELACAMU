import "../scss/layout/CharacterList.scss";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const charactersElements = characters.map((character) => {
    return <CharacterCard key={character.id} characterData={character} />;
  });

  return (
    <section>
      <h3></h3>
      <ul className="text-list">{charactersElements}</ul>
    </section>
  );
}

export default CharacterList;
