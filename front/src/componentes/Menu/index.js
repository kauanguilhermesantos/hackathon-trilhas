// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; // Para estilos

const Menu = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/mapa">Mapa</Link></li> {/* Link para o Mapa */}
        </ul>
    </nav>
);

export default Menu;