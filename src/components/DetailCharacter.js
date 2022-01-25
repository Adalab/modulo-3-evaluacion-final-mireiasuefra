import { Link } from "react-router-dom";

function DetailCharacter(props) {
  return (
    <section>
      <Link to="/">VOLVER</Link>
      <h2>Detalle del personaje</h2>
      <img
          className="logo"
          src={
            props.oneCharacter.image ||
            "https://via.placeholder.com/210x295/ffffff/666666/?text=Harry Potter"
          }
          alt="imagen de la card"
        ></img>
      <p>{props.oneCharacter.name}</p>
      <p>{props.oneCharacter.house}</p>
    </section>
  );
}

export default DetailCharacter;
