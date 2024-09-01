// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; // Para estilos

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/mapa">Mapa dos Polos</Link>
        </div>
    );
};

export default Menu;

