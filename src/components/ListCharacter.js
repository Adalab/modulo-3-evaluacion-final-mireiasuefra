import CardCharacter from "./CardCharacter";

function ListCharacter(props) {
  //Pintado de las tarjetas con los personajes:

  //aqui saco el filtro fuera. luego recorro el array, y si hay info (>0) te pinta esa info... y si no la hay (<0) te devuelve el mensaje de no encontrar personaje
  const renderCardCharacter = () => {
    const charactersFiltered = props.characters.filter((oneCharacter) => {
      return oneCharacter.name
        .toLowerCase()
        .includes(props.filterCharacters.toLocaleLowerCase());
    });

    if (charactersFiltered.length > 0) {
      return charactersFiltered.map((oneCharacter, index) => {
        return (
          <CardCharacter
            key={index}
            oneCharacter={oneCharacter}
            index={index}
          />
        );
      });
    } else {
      return "No hemos encontrado personajes con ese nombre";
    }
  };

  return (
    <section className="list-character">
      <ul className="list-character__list">{renderCardCharacter()}</ul>
    </section>
  );
}

export default ListCharacter;
