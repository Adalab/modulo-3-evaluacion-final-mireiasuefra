function FilterHouseCharacter(props) {
  
  const handleSearchFilterHouseCharacter = (ev) => {
    props.setfilterHouseCharacters(ev.currentTarget.value);
  };

  return (
    <div className="filter-house-character">
      <label className="filter-house-character__search-house" htmlFor="house">Selecciona la casa:</label>
      <select
        className="filter-house-character__select-search-house"
        name="house"
        id="house"
        value={props.filterHouseCharacters}
        onChange={handleSearchFilterHouseCharacter}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
}

export default FilterHouseCharacter;
