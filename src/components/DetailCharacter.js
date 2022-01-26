import { Link } from "react-router-dom";

function DetailCharacter(props) {

  //para traducir el genero
  const renderGender = () => {
    const gender = props.oneCharacter.gender;
    if (gender === 'male') {
      return 'Hombre';
    } else if (gender === 'female') {
      return 'Mujer';
    } else {
      return gender;
    }
  }
//para traducir si está vivo o muerto
  const renderAlive = () => {
    const alive = props.oneCharacter.alive;
    if (alive === true) {
      return 'Vivo';
    } else if (alive === false) {
      return 'Muerto';
    }
  }
//para traducir la especie
  const renderSpecies = () => {
    const species = props.oneCharacter.species;
    if (species === 'human') {
      return 'humano';
    } else if (species === 'half-giant') {
      return 'Semi-gigante';
    }else if (species === 'werewolf') {
      return 'Hombre lobo';
    }else if (species === 'ghost') {
      return 'Fantasma';
    }
  }

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
      <p>{renderAlive()}</p>
      <p>{renderSpecies()}</p> 
      <p>{renderGender()}</p>
      <p>{props.oneCharacter.house}</p>
    </section>
  );
}

export default DetailCharacter;
