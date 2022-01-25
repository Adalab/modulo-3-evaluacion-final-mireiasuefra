import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import FilterNameCharacter from "./FilterNameCharacter";
import FilterHouseCharacter from "./FilterHouseCharacter";
import ButtonReset from "./ButtonReset";

function App() {
  // Variables ESTADO:
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState("");
  const [filterHouseCharacters, setfilterHouseCharacters] =
    useState("gryffindor");

  // Llamada a la API:
  useEffect(() => {
    callToApi(filterHouseCharacters).then((response) => {
      setCharacters(response);
    });
    //cada vez que cambia la variable filterHouseCharacters se ejecuta lo que hay dentro del useEffect: la llamada a la api, utilizando el  filterHouseCharacters como parámetro
  }, [filterHouseCharacters]);

  //Pintado de las tarjetas con los personajes:
  const renderCardCharacter = () => {
    return characters
      .filter((oneCharacter) => {
        return oneCharacter.name
          .toLowerCase()
          .includes(filterCharacters.toLowerCase());
      })
      .map((oneCharacter, index) => {
        return (
          <li key={index}>
            <img
              className="logo"
              src={
                oneCharacter.image ||
                "https://via.placeholder.com/210x295/ffffff/666666/?text=Harry Potter"
              }
              alt="imagen de la card"
            ></img>
            <p>{oneCharacter.name}</p>
            <p>{oneCharacter.house}</p>
          </li>
        );
      });
  };

  //Para buscar personaje:
  const handleSearchFilterCharacter = (ev) => {
    setFilterCharacters(ev.currentTarget.value);
  };

  //Para buscar por specie de personaje
  const handleSearchFilterHouseCharacter = (ev) => {
    setfilterHouseCharacters(ev.currentTarget.value);
  };

  // -----------------//-------------//-------------//

  return (
    <div className="bg-page">
      <Header />
      <main>
        <form>
          <FilterNameCharacter
            filterCharacters={filterCharacters}
            handleSearchFilterCharacter={handleSearchFilterCharacter}
          />
          <FilterHouseCharacter
            filterHouseCharacters={filterHouseCharacters}
            handleSearchFilterHouseCharacter={handleSearchFilterHouseCharacter}
          />
          <ButtonReset />
          <section>
            <ul>{renderCardCharacter()}</ul>
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
