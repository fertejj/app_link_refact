import { useState } from "react";
import "../styles/components/_nav.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  }
  return (
    <header className="header">

      <a href="/" className="logo">
        Logo
      </a>

      <nav className={`navbar ${isActive ? "active" : ""}`}>

        <a href="/">Inicio</a>
        <a href="/login">Iniciar Sesion</a>
        <a href="/register">Registrarse</a>
 
      </nav>

      <GiHamburgerMenu className={`menu-btn ${isActive ? "menu-btn-active" : ""}`} onClick={toggleActive} />
    </header>
  );
};

export default Nav;
