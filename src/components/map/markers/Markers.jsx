import React from "react";
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import sites from '../../../sites/Sites.jsx';
import icon from '../../../assets/icon/Icon.js';
import styles from './Markers.module.scss';
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

const Markers = () => {
    return ( 
        <div>
            {sites.map((site, index) => (
                <Marker key={index} position={site.coords} icon={customIcon}>
                <Popup className={styles.popup} autoPan={true}>
                    <div className={styles.popupContent}>
                        <div className={styles.siteImgCont}>
                          <img src={site.img} alt={site.name} />
                        </div>
                        <div className={styles.cont1}>
                          <h1>{site.name}</h1>
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
                        <p>{site.description}</p>
                        <div className={styles.fullDeets}>
                          <button className={styles.deets}>
                            <p>View Full Details {'>'}</p>
                          </button>
                        </div>
                    </div>
                </Popup>
                </Marker>
            ))}
        </div>
     );
}
 
export default Markers;