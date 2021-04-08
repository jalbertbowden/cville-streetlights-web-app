import React, { useState } from 'react'
import { MapContainer, CircleMarker, TileLayer, Marker, Popup, GeoJSON, Tooltip, AttributionControl, Circle  } from 'react-leaflet'
import streetlights from '../streetlights.json';
import combined from '../grid-combined.json';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
    iconUrl: require("../resources/images/marker.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46]
});

export default MainMap = () => {
    const [latLng, setLatLng] = useState([38.0293, -78.4767]);
    const [zoom, setZoom] = useState(13);
    const [data, setData] = useState([]);

    showPreview = (place) => {
        // show place's description
    }

    changeCountryColor = (event) => {
        console.log('map click');

        /*
        event.target.setStyle({
          color: "green",
          fillColor: this.state.color,
          fillOpacity: 1,
        });
        */
    };

    onEachCountry = (fixture, layer) => {
        const lampCD = fixture.properties.LAMP_CD;
        console.log(lampCD);
        layer.bindPopup(lampCD);
    
        layer.options.fillOpacity = 0.2; //0-1 (0.1, 0.2, 0.3)
        // const colorIndex = Math.floor(Math.random() * this.colors.length);
        // layer.options.fillColor = this.colors[colorIndex]; //0
    
        layer.on({
          click: this.changeCountryColor,
        });
    };

    return(
        this.props.streetlights ?

        <MapContainer
                center={[this.state.lat, this.state.lng]} 
                zoom={this.state.zoom} 
                style={{ width: '700px', height: '700px'}}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            
            <MarkerClusterGroup
                    spiderfyDistanceMultiplier={1}
                    showCoverageOnHover={false}
            >   
                {
                    streetlights.features.map((dataItem, k) => {
                        console.log('', dataItem);
                        const coordinates = dataItem.geometry.coordinates;
                        const fixtureStyle = dataItem.properties.FIXTURE_ST;
                        return(
                            <Marker
                                key={k}
                                center={[coordinates[0], coordinates[1]]}
                                position={[coordinates[0], coordinates[1]]}
                                icon = {this.markerIcon}
                            >
                            <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                                <span>{ fixtureStyle }</span>
                            </Tooltip>
                            </Marker>
                        );
                    });
                }
            </MarkerClusterGroup>
            
        </MapContainer>
    :
        'Data is loading...'
    )

}