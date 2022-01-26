function FilterNameCharacter(props) {
  return (
    <>
      <label htmlFor="name">Busca por personaje:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Busca tu personaje"
        value={props.filterCharacters} 
        onChange={props.handleSearchFilterCharacter}
      />
    </>
  );
}

export default FilterNameCharacter;
