import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Tooltip, AttributionControl, Circle  } from 'react-leaflet'
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
    const [latLng] = useState([38.0293, -78.4767]);
    const [zoom] = useState(13);

    const showPreview = (place) => {
        // show place's description
    }

    return (
        props.streetlights ?
            <MapContainer
                    center={[latLng[0], latLng[1]]} 
                    zoom={zoom} 
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
                        props.streetlights.features.map((dataItem) => {
                            console.log('', dataItem);

                            const coordinates = dataItem.geometry.coordinates;
                            const fixtureStyle = dataItem.properties.FIXTURE_ST;
                            return (
                                <Marker
                                    key={ dataItem.properties.CUID }
                                    center={ [coordinates[1], coordinates[0]] }
                                    position={ [coordinates[1], coordinates[0]] }
                                    icon = { markerIcon }
                                >
                                    <Tooltip direction="right" offset={ [-8, -2] } opacity={ 1 }>
                                        <span>{ fixtureStyle }</span>
                                    </Tooltip>
                                </Marker>
                            )
                        })
                    }
                </MarkerClusterGroup>
            </MapContainer>
        :
            'Data is loading...'
    )

}

export default MainMap;
