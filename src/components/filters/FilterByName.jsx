import "../../scss/layout/FilterByName.scss";

function FilterByName({ onChangeName }) {
  const handleChange = (ev) => {
    onChangeName(ev.target.value);
  };

  return (
    <>
      <div className="cointainer-input">
        <label htmlFor="name"></label>
        <input
          className="input"
          type="text"
          id="name"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default FilterByName;
