import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGhost,
  faUser,
  faDog,
  faMale,
  faDizzy,
  faHeartbeat,
  faMars,
  faVenus,
  faHatWizard,
} from "@fortawesome/free-solid-svg-icons";

const DEFAULT_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYhuFXrujA0fktSUXTdFeBXEz1Ar7as3KEgwzCMYbWjl8h_a2_BYUdRkyso7suM5bM94&usqp=CAU";

function DetailCharacter(props) {

  const renderGender = () => {
    const gender = props.oneCharacter.gender;
    if (gender === "male") {
      return (
        <>
          Masculino <FontAwesomeIcon icon={faMars} />
        </>
      );
    } else if (gender === "female") {
      return (
        <>
          Femenino <FontAwesomeIcon icon={faVenus} />
        </>
      );
    } else {
      return gender;
    }
  };

  const renderAlive = () => {
    const alive = props.oneCharacter.alive;
    if (alive) {
      return (
        <>
          Vivo <FontAwesomeIcon icon={faHeartbeat} />
        </>
      );
    } else {
      return (
        <>
          Muerto <FontAwesomeIcon icon={faDizzy} />
        </>
      );
    }
  };

  const renderSpecies = () => {
    const species = props.oneCharacter.species;

    if (species === "human") {
      return (
        <>
          Humano <FontAwesomeIcon icon={faUser} />
        </>
      );
    } else if (species === "half-giant") {
      return (
        <>
          Semi - Gigante <FontAwesomeIcon icon={faMale} />
        </>
      );
    } else if (species === "werewolf") {
      return (
        <>
          Hombre - Lobo <FontAwesomeIcon icon={faDog} />
        </>
      );
    } else if (species === "ghost") {
      return (
        <>
          Fantasma <FontAwesomeIcon icon={faGhost} />
        </>
      );
    } else {
      return species;
    }
  };

  return (
    <section className="detail-character">
      <Link className="detail-character__link" to="/">
        VOLVER
      </Link>
      <h2 className="detail-character__title">Detalle del personaje</h2>
      <div
        className={`detail-character__card detail-character__card--${props.oneCharacter.house.toLowerCase()}`}
      >
        <img
          className="detail-character__image"
          src={props.oneCharacter.image || DEFAULT_IMG}
          alt="imagen de la card"
        ></img>
        <div className="detail-character__info">
          <p
            className={`detail-character__info-name detail-character__info-name--${props.oneCharacter.house.toLowerCase()}`}
          >
            {props.oneCharacter.name}
          </p>
          <p className="detail-character__info-item">
            Personaje: {renderAlive()}{" "}
          </p>
          <p className="detail-character__info-item">
            Especie: {renderSpecies()}
          </p>
          <p className="detail-character__info-item">
            Genero: {renderGender()}
          </p>
          <p className="detail-character__info-item">
            Casa: {props.oneCharacter.house}{" "}
            <FontAwesomeIcon icon={faHatWizard} />
          </p>
        </div>
      </div>
    </section>
  );
}

export default DetailCharacter;
