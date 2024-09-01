// src/componentes/Mapa.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './mapa.css'; // Certifique-se de que o CSS está importado

import iconURL from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const polos = [
    { id: 1, nome: 'Polo 1', coordenadas: [-23.5505, -46.6333] },
    { id: 2, nome: 'Polo 2', coordenadas: [-22.9068, -43.1729] },
    { id: 3, nome: 'Polo 3', coordenadas: [-30.0346, -51.2177] },
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
