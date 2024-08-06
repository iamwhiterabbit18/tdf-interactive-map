import React, { useState } from "react";
import { MapContainer, ImageOverlay} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.scss';
import sites from './../../sites/Sites.jsx';
import CustomMarker from './markers/CustomMarker.jsx';
import Modal from "./modal/Modal.jsx";

const mapAssets = {
    image: '/map.png',
    pin: '/marker.png'
}

const bounds = [[1000, 500], [4000, 6000]]; // Map position


// const customIcon = new L.Icon({
//     iconUrl: mapAssets.pin,
//     iconSize: [32, 32], 
//     iconAnchor: [16, 32], 
//     popupAnchor: [0, -32],
//     autopan: true,
//   });
    // locating x and y
//   const MapClickHandler = () => {
//     useMapEvents({
//       click: (event) => {
//         const { lat, lng } = event.latlng;
//         alert(`Coordinates: (${lat}, ${lng})`);
//       },
//     });
//     return null;
//   };
// console.log(markers[0].img);
const Map = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleViewFullDetail = (marker) => {
    setSelectedMarker(marker);
    setModalOpen(true);
    };

    const closeModal = () => {
    setModalOpen(false);
    setSelectedMarker(null);
    };
    
    return ( 
        
        <div id="map">
            <MapContainer
            crs={L.CRS.Simple}
            bounds={bounds}
            maxBounds={bounds}
            style={{ height: '100vh', width: '100%'}}
            minZoom={-1}
            maxZoom={0.2}
            className={styles.mapContainer}>
            <ImageOverlay url={mapAssets.image} bounds={bounds}/>
            {/* <MapClickHandler /> */}
            {sites.map((site, index) => (
                <CustomMarker key={index} marker={site} onViewFullDetail={handleViewFullDetail}/>
            ))}
            </MapContainer>
            <Modal 
            isOpen={modalOpen} 
            onClose={closeModal} 
            details={selectedMarker}/>
        </div>
    );
}
export default Map;