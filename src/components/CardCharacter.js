import { Link } from "react-router-dom";

function CardCharacter(props) {
  return (
    <li
      className={`card-character card-character--${props.oneCharacter.house.toLowerCase()}`}
    >
      <Link to={`/character/${props.index}`}>
        <img
          className="card-character__image"
          src={
            props.oneCharacter.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYhuFXrujA0fktSUXTdFeBXEz1Ar7as3KEgwzCMYbWjl8h_a2_BYUdRkyso7suM5bM94&usqp=CAU"
          }
          alt="imagen de la card"
        ></img>
      </Link>
      <div className="card-character__info">
        <p
          className={`card-character__info-name card-character__info-name--${props.oneCharacter.house.toLowerCase()}`}
        >
          {props.oneCharacter.name}
        </p>
        <p className="card-character__info-item">{props.oneCharacter.house}</p>
      </div>
    </li>
  );
}

export default CardCharacter;
