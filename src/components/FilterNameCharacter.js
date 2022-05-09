function FilterNameCharacter(props) {

  const handleSearchFilterCharacter = (ev) => {
    props.setFilterCharacters(ev.currentTarget.value);
  };

  return (
    <div className="filter-name-character">
      <label className="filter-name-character__search-character" htmlFor="name">
        Busca por personaje:
      </label>
      <input
        className="filter-name-character__input-search-character"
        type="text"
        name="name"
        id="name"
        placeholder="Busca tu personaje"
        value={props.filterCharacters}
        onChange={handleSearchFilterCharacter}
      />
    </div>
  );
}

export default FilterNameCharacter;
