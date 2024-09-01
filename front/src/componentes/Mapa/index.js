// src/componentes/Mapa.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './mapa.css'; // Certifique-se de que o CSS está importado

import iconURL from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const polos = [
    { id: 1, nome: 'Estação Tech Jordoa', coordenadas: [-2.555348183222985, -44.214515415342696] },
    { id: 2, nome: 'Estação Tech João de Deus', coordenadas: [-22.9068, -43.1729] },
    { id: 3, nome: 'Estação Tech Forquilha', coordenadas: [-30.0346, -51.2177] },
    { id: 4, nome: 'Estação Tech Sol e Mar', coordenadas: [-30.0346, -51.2177] },
    { id: 5, nome: 'Estação Maracanã', coordenadas: [-2.6389736729993265, -44.271971682724306] },
    { id: 6, nome: 'Estação Tech Itapera', coordenadas: [-30.0346, -51.2177] },
    { id: 7, nome: 'Estação Tech Nova vida', coordenadas: [-2.6240501066878257, -44.19374203891154] },
];

const Mapa = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Configuração do ícone do marcador
    const icon = new L.Icon({
        iconUrl: iconURL,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: shadowUrl,
        shadowSize: [41, 41],
    });

    // Filtrando polos com base no termo de pesquisa
    const filteredPolos = polos.filter(polo =>
        polo.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <input
                type="text"
                className="search-bar"
                placeholder="Pesquisar polos..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="map-container">
                <MapContainer center={[-15.7801, -47.9292]} zoom={4} style={{ height: "400px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredPolos.map(polo => (
                        <Marker key={polo.id} position={polo.coordenadas} icon={icon}>
                            <Popup>
                                {polo.nome}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Mapa;
