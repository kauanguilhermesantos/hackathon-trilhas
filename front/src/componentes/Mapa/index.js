// src/componentes/Mapa.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Defina os dados dos polos de tecnologia
const polos = [
    { id: 1, nome: 'Polo 1', coordenadas: [-23.5505, -46.6333] }, // Exemplo: São Paulo
    { id: 2, nome: 'Polo 2', coordenadas: [-22.9068, -43.1729] }, // Exemplo: Rio de Janeiro
    { id: 3, nome: 'Polo 3', coordenadas: [-30.0346, -51.2177] }, // Exemplo: Porto Alegre
];

const Mapa = () => {
    // Configura o ícone do marcador
    const icon = new L.Icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        shadowSize: [41, 41],
    });

    return (
        <MapContainer center={[-15.7801, -47.9292]} zoom={4} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {polos.map(polo => (
                <Marker key={polo.id} position={polo.coordenadas} icon={icon}>
                    <Popup>
                        {polo.nome}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Mapa;
