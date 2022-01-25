import "../styles/components/_app.scss";
import { Link } from "react-router-dom";

function CardCharacter(props) {
  return (
    <li>
      <Link to={`/character/${props.index}`}>
        <img
          className="logo"
          src={
            props.oneCharacter.image ||
            "https://via.placeholder.com/210x295/ffffff/666666/?text=Harry Potter"
          }
          alt="imagen de la card"
        ></img>
      </Link>
      <p>{props.oneCharacter.name}</p>
      <p>{props.oneCharacter.house}</p>
    </li>
  );
}

export default CardCharacter;
