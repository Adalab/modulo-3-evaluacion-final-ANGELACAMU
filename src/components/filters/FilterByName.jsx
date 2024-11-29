//import ".../scss/layout/FilterByName.scss";

function FilterByName({ onChangeName }) {
  const handleChange = (ev) => {
    onChangeName(ev.target.value);
  };

  return (
    <>
      <label htmlFor="name"></label>
      <input className="input" type="text" id="name" onChange={handleChange} />
    </>
  );
}

export default FilterByName;
