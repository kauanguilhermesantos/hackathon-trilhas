// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; // Para estilos
import imgDoaTech from "../../assets/logo/logo-doatech1.png";

const Menu = () => {
    return (
        <div className="menu">
            <div className='imgMenu'>
                <img src={imgDoaTech}/>
            </div>
            <div className='lista'>
                <Link className="listaMenu" to="/">Início</Link>
                <Link className="listaMenu" to="/sobre">Sobre</Link>
                <Link className="listaMenu" to="/contato">Contato</Link>
                <Link className="listaMenu" to="/mapa">Mapa dos Polos</Link>
            </div>
        </div>
    );
};

export default Menu;

