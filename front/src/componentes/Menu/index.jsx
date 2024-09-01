// src/Menu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import imgDoaTech from "../../assets/logo/logo-doatech1.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className="itemsMenu">
        <div className="imgMenu">
          <img src={imgDoaTech} alt="Logo" />
        </div>

        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <GiHamburgerMenu size={20} />
        </button>

        <div className={`lista ${isOpen ? "active" : ""}`}>
          <Link className="listaMenu" to="/">
            Início
          </Link>
          <Link className="listaMenu" to="/sobre">
            Sobre
          </Link>
          <Link className="listaMenu" to="/contato">
            Contato
          </Link>
          <Link className="listaMenu" to="/mapa">
            Mapa dos Polos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
