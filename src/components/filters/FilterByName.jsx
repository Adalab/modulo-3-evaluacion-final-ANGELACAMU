//import "../../scss/FilterByName.scss";

function FilterByName({ onChangeName }) {
  const handleChange = (ev) => {
    onChangeName(ev.target.value);
  };

  return (
    <>
      <label htmlFor="name">Escribe aquí tu búsqueda:</label>
      <input className="input" type="text" id="name" onChange={handleChange} />
    </>
  );
}

export default FilterByName;