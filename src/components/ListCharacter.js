import CardCharacter from "./CardCharacter";

function ListCharacter(props) {

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
      return <p className="list-character__not-found">No hemos encontrado personajes con ese nombre</p>
      ;
    }
  };

  return (
    <section className="list-character">
      <ul className="list-character__list">{renderCardCharacter()}</ul>
    </section>
  );
}

export default ListCharacter;
