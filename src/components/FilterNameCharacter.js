function FilterNameCharacter(props) {
  return (
    <div className="filter-name-character">
      <label className="filter-name-character__serch-character" htmlFor="name">
        Busca por personaje:
      </label>
      <input
        className="filter-name-character__input-serch-character"
        type="text"
        name="name"
        id="name"
        placeholder="Busca tu personaje"
        value={props.filterCharacters}
        onChange={props.handleSearchFilterCharacter}
      />
    </div>
  );
}

export default FilterNameCharacter;
