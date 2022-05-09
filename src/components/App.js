import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import callToApi from "../services/api";
import ls from "../services/localStorage";
import Header from "./Header";
import FilterNameCharacter from "./FilterNameCharacter";
import FilterHouseCharacter from "./FilterHouseCharacter";
import ButtonReset from "./ButtonReset";
import DetailCharacter from "./DetailCharacter";
import ListCharacter from "./ListCharacter";
import ErrorPage from "./ErrorPage";

function App() {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterCharacters, setFilterCharacters] = useState(
    ls.get("filterCharacters", "")
  );
  const [filterHouseCharacters, setfilterHouseCharacters] = useState(
    ls.get("filterHouseCharacters", "gryffindor")
  );

  useEffect(() => {
    callToApi(filterHouseCharacters).then((response) => {
      setCharacters(response);
    });
  }, [filterHouseCharacters]);

  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterCharacters", filterCharacters);
    ls.set("filterHouseCharacters", filterHouseCharacters);
  }, [characters, filterCharacters, filterHouseCharacters]);

  const renderDetailCharacter = (props) => {
    const index = props.match.params.index;
    const charactersFiltered = characters.filter((oneCharacter) => {
      return oneCharacter.name
        .toLowerCase()
        .includes(filterCharacters.toLocaleLowerCase());
    });

    return <DetailCharacter oneCharacter={charactersFiltered[index]} />;
  };

  return (
    <div className="bg-page">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <form onSubmit={(ev) => ev.preventDefault()}>
              <FilterNameCharacter
                filterCharacters={filterCharacters}
                setFilterCharacters={setFilterCharacters}
              />
              <FilterHouseCharacter
                filterHouseCharacters={filterHouseCharacters}
                setfilterHouseCharacters={setfilterHouseCharacters}
              />
              <ButtonReset
                setFilterCharacters={setFilterCharacters}
                setfilterHouseCharacters={setfilterHouseCharacters}
              />
            </form>

            <ListCharacter
              characters={characters}
              filterCharacters={filterCharacters}
            />
          </Route>

          <Route path="/character/:index" render={renderDetailCharacter} />

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
