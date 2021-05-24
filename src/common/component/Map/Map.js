import React,{ useState,useEffect } from 'react';
import { MapContainer,TileLayer,Marker,Popup,LayerGroup,Circle } from "react-leaflet"
import { showDataOnMap } from '../../../util'

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 200,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 400,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 800,
  },
};
function Map({ countries, center, zoom, casesType }) {

    const [map, setMap] = useState(null)
    useEffect(() => {
            map && map.setView(center, zoom)
    },[center])
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}         whenCreated={setMap}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {showDataOnMap(countries,casesType,casesTypeColors[casesType])}
            </MapContainer>
        </div>
    )
}

export default Map
