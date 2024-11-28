function CharacterCard({ characterData }) {
  //console.log(characterData);
  return (
    <li>
      <img src={characterData.photo} alt={characterData.name} />
      <h4>{characterData.name}</h4>
      <p>{characterData.specie}</p>
    </li>
  );
}

export default CharacterCard;
