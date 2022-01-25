import "../styles/components/_app.scss";

function Header(props) {

  return (
    <>
      <label htmlFor="house">Selecciona la casa:</label>
      <select
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
    </>
  );
}

export default Header;
