// src/componentes/Sobre.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre'; // Importando o componente Sobre
import Contato from './Contato';


const Sobre = () => {
    return (
        <div>
            <h1>Área de Tecnologia</h1>
            <p>Bem-vindo à página de tecnologia! Aqui discutimos as últimas tendências e inovações no mundo da tecnologia.</p>
        </div>
    );
};

export default Sobre;