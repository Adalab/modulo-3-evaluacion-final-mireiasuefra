import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import FilterNameCharacter from "./FilterNameCharacter";
import FilterHouseCharacter from "./FilterHouseCharacter";
import ButtonReset from "./ButtonReset";
import DetailCharacter from "./DetailCharacter";
import { Route, Switch } from "react-router-dom";
import ListCharacter from "./ListCharacter";

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

  //Para buscar personaje:
  const handleSearchFilterCharacter = (ev) => {
    setFilterCharacters(ev.currentTarget.value);
  };

  //Para buscar por specie de personaje
  const handleSearchFilterHouseCharacter = (ev) => {
    setfilterHouseCharacters(ev.currentTarget.value);
  };

  const renderDetailCharacter = (props) => {
    const index = props.match.params.index;
    return <DetailCharacter oneCharacter={characters[index]}/>
  }

  // -----------------//-------------//-------------//

  return (
    <div className="bg-page">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <form>
              <FilterNameCharacter
                filterCharacters={filterCharacters}
                handleSearchFilterCharacter={handleSearchFilterCharacter}
              />
              <FilterHouseCharacter
                filterHouseCharacters={filterHouseCharacters}
                handleSearchFilterHouseCharacter={
                  handleSearchFilterHouseCharacter
                }
              />
              <ButtonReset />
            </form>

            <ListCharacter
              characters={characters}
              filterCharacters={filterCharacters}
            />
          </Route>

          <Route path="/character/:index" render={renderDetailCharacter}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
