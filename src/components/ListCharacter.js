import "../styles/components/_app.scss";
import CardCharacter from "./CardCharacter";

function ListCharacter(props) {
  //Pintado de las tarjetas con los personajes:
  const renderCardCharacter = () => {
    return props.characters
      .filter((oneCharacter) => {
        return oneCharacter.name
          .toLowerCase()
          .includes(props.filterCharacters.toLowerCase());
      })
      .map((oneCharacter, index) => {
        return <CardCharacter key={index} oneCharacter={oneCharacter} index={index} />;
      });
  };

  return (
    <section>
      <ul>{renderCardCharacter()}</ul>
    </section>
  );
}

export default ListCharacter;
