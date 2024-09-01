// src/componentes/Home.js
import React from 'react';
import './Home.css'; // Certifique-se de ter um arquivo CSS para estilos

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Bem-vindo à Tech Institution</h1>
                <p>Transformando o futuro através da educação em tecnologia.</p>
            </header>
            
            <section className="home-info">
                <h2>Sobre Nós</h2>
                <p>A Tech Institution é dedicada a fornecer educação de alta qualidade em tecnologia, preparando nossos alunos para os desafios do mercado de trabalho moderno.</p>
            </section>

            <section className="home-cursos">
                <h2>Nossos Cursos</h2>
                <ul>
                    <li>Desenvolvimento Web</li>
                    <li>Ciência de Dados</li>
                    <li>Inteligência Artificial</li>
                    <li>Desenvolvimento de Aplicativos Móveis</li>
                    <li>Segurança da Informação</li>
                </ul>
            </section>

            <section className="home-contato">
                <h2>Entre em Contato</h2>
                <p>Para mais informações, envie um e-mail para: <a href="mailto:contato@techinstitution.com">contato@techinstitution.com</a></p>
            </section>
        </div>
    );
};

export default Home;
