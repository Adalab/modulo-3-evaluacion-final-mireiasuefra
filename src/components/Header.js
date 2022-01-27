import logoHeader from "../images/logo-HP.png"

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logoHeader} alt="Logo Harry Potter"></img>
    </header>
  );
}

export default Header;
