function Header(props) {

  return (
    <div className="filter-house-character">
      <label className="filter-house-character__serch-house" htmlFor="house">Selecciona la casa:</label>
      <select
        className="filter-house-character__select-serch-house"
        name="house"
        id="house"
        value={props.filterHouseCharacters}
        onChange={props.handleSearchFilterHouseCharacter}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
}

export default Header;
