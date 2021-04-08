import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MainMap = (props) => {
    const [latLng] = useState([38.0293, -78.4767]);
    const [zoom] = useState(13);

    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
            iconUrl: require('leaflet/dist/images/marker-icon.png').default,
            shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
        });
    }, []);

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
                        props.streetlights.features.map((dataItem, k) => {
                            console.log('', dataItem);

                            const coordinates = dataItem.geometry.coordinates;
                            const fixtureStyle = dataItem.properties.FIXTURE_ST;
                            return (
                                <Marker
                                    key={ k }
                                    position={ [coordinates[1], coordinates[0]] }
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
