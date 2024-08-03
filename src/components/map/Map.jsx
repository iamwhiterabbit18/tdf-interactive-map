import React from "react";
import { MapContainer, ImageOverlay} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import Markers from './markers/Markers.jsx';

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

    return ( 
        
        <div id="map">
            <MapContainer
            crs={L.CRS.Simple}
            bounds={bounds}
            maxBounds={bounds}
            style={{ height: '100vh', width: '100%'}}
            minZoom={-2}
            maxZoom={0.2}
            className={styles.mapContainer}>
            
            <ImageOverlay url={mapAssets.image} bounds={bounds}/>
            {/* <MapClickHandler /> */}
            <Markers />

            </MapContainer>
        </div>
     );
}
export default Map;