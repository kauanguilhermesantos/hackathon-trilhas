import { useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import Menu from './componentes/Menu';
import Mapa from './componentes/Mapa';

function App() {
    const times = [
        { nome: 'Programação', corPrimaria: '#D9F7E9', corSecundaria: '#57C278' },
        { nome: 'Front-End', corPrimaria: '#E8F8FF', corSecundaria: '#82CFFA' },
        { nome: 'Data Science', corPrimaria: '#F0F8E2', corSecundaria: '#A6D157' },
        { nome: 'Devops', corPrimaria: '#FDE7E8', corSecundaria: '#E06B69' },
        { nome: 'UX e Design', corPrimaria: '#FAE9F5', corSecundaria: '#DB6EBF' },
        { nome: 'Mobile', corPrimaria: '#FFF5D9', corSecundaria: '#FFBA05' },
        { nome: 'Inovação e Gestão', corPrimaria: '#FFEEDF', corSecundaria: '#FF8A29' },
    ];
 // um card incial
    const inicial = [
        {
            nome: 'WALLACE PABLO',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://github.com/PabloJ4.jpeg',
            time: times[0].nome
        },
    ];

    const [colaboradores, setColaboradores] = useState(inicial);

    const Home = () => (
        <div>
            <Banner />
            <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
            <section className="times">
                <h1>Minha organização</h1>
                {times.map((time, indice) => (
                    <Time key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />
                ))}
            </section>
            <Rodape />
        </div>
    );

    const Sobre = () => <h1>Sobre</h1>;
    const Contato = () => <h1>Contato</h1>;
    const Mapa = () => <h1>Encontre um polo perto de você</h1>;

    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/mapa" element={<Mapa />} />
            </Routes>
        </Router>
    );
}

export default App;
