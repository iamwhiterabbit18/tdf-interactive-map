import React from "react";
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from '../../../assets/icon/Icon.js';
import styles from './CustomMarker.module.scss';
import Time from "./Time.jsx";

const mapAssets = {
  image: '/map.png',
  pin: '/marker.png'
}

const customIcon = new L.Icon({
    iconUrl: mapAssets.pin,
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32],
    autopan: true,
  });

const CustomMarker = ( { marker, onViewFullDetail }) => {
    return (
      <Marker position={marker.coords} icon={customIcon}>
      <Popup
        className={styles.popup}
        autoPan={true}
        autoPanPadding={[20, 20]}>
          <div className={styles.popupContent}>
              <div className={styles.siteImgCont}>
                <img src={marker.img} alt={marker.name} />
              </div>
              <div className={styles.cont1}>
                <h1>{marker.name}</h1>
                <div className={styles.weather}>
                  <div className={styles.logo}>
                    <img src={icon.weather.cloudy} alt="weatherIcon" />
                  </div>
                  <div className={styles.weatherDeets}>
                    <p>Mildly sunny - 14°</p>
                    <Time />
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.cont2}>
                <h2>Quick Facts</h2>
                <div className={styles.btns}>
                  <button>
                    <img src={icon.actions.wayfind} alt="wayfind" />
                  </button>
                  <button>
                    <img src={icon.actions.speaker} alt="speaker" />
                  </button>
                </div>
              </div>
              <p>{marker.description}</p>
              <div className={styles.fullDeets}>
                <button
                className={styles.deets}
                onClick={()=> onViewFullDetail(marker)}>
                  <p>View Full Details {'>'}</p>
                </button>
              </div>
          </div>
      </Popup>
      </Marker>
     );
}
 
export default CustomMarker;