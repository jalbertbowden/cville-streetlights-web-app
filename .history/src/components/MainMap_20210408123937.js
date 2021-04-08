import React, { useState } from 'react'
import { MapContainer, CircleMarker, TileLayer, Marker, Popup, GeoJSON, Tooltip, AttributionControl, Circle  } from 'react-leaflet'
import streetlights from '../streetlights.json';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
    iconUrl: require("../resources/images/marker.png"),
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46]
});

const MainMap = (props) => {
    const [latLng, setLatLng] = useState([38.0293, -78.4767]);
    const [zoom, setZoom] = useState(13);
    const [data, setData] = useState([]);

    const showPreview = (place) => {
        // show place's description
    }

    return (
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
                        this.props.streetlights.features.map((dataItem, k) => {
                            console.log('', dataItem);
                            /*
                            const coordinates = dataItem.geometry.coordinates;
                            const fixtureStyle = dataItem.properties.FIXTURE_ST;
                            return (
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
                            */
                        })
                    }
                </MarkerClusterGroup>
            </MapContainer>
        :
            'Data is loading...'
    )

}

export default MainMap;
