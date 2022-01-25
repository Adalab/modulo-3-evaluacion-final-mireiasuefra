import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Header from "./Header";


function App() {
  // Variables ESTADO:

  const [characters, setCharacters] = useState([]);

  // Llamada a la API:
  useEffect(() => {
    callToApi().then((response) => {
      setCharacters(response);
    });
  }, []);

  // -----------------//-------------//-------------//

  return (

  
   <div className="bg-page">
      <Header/>

    
    
  </div>
  );
}

export default App;
