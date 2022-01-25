import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/Api";

function App() {
  // Variables ESTADO:

  const [characters, setCharacters] = useState([]);

  // Llamada a la API:

  useEffect(() => {
    // Dentro de useEffect llamamos al API

    callToApi().then((response) => {
      setCharacters(response);
    });
  }, []);



  // -----------------//-------------//-------------//

  return <div> hola mundo </div>;
}

export default App;
