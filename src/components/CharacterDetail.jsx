import "../scss/layout/CharacterDetail.scss";

function CharacterDetail({ character }) {
  console.log(character);
  return (
    <section className="container-detail">
      <img className="img-detail" src={character.photo} alt={character.name} />
      <div className="list-detail">
        <h3>{character.name}</h3>
        <p>{character.specie}</p>
        <p>{character.planet}</p>
        <p>{character.episodes.length}</p>
        <p>{character.status}</p>
      </div>
    </section>
  );
}

export default CharacterDetail;
