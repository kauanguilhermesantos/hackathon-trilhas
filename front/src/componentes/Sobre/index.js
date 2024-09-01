// src/componentes/Rotas.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre'; // Importando o componente Sobre
import Contato from './Contato';

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} /> {/* Rota para a página Sobre */}
            <Route path="/contato" element={<Contato />} />
        </Routes>
    );
};

export default Rotas;
