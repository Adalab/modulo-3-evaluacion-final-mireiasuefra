import logoHeader from "../images/logo-HP.png"
import "../styles/components/_app.scss";

function Header() {
  return (
    <header>
      <img className="logo" src={logoHeader} alt="Logo Harry Potter"></img>
    </header>
  );
}

export default Header;
