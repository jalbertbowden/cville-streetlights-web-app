import React, { Component } from 'react'
import { MapContainer, CircleMarker, TileLayer, Marker, Popup, GeoJSON, Tooltip, AttributionControl, Circle  } from 'react-leaflet'
import streetlights from '../streetlights.json';
import combined from '../grid-combined.json';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

export default class MainMap extends Component {

    
    constructor(props, context) {
        super(props, context);

        this.state = {
            lat: 38.0293, 
            lng: -78.4767,
            zoom: 13,
            data: []
        };
        
        this.geoJsonLayer = React.createRef();
        this.markerIcon = new L.Icon({
            iconUrl: require("../resources/images/marker.png"),
            iconSize: [35, 45],
            iconAnchor: [17, 46],
            popupAnchor: [0, -46]
        });
    
    }

    showPreview = (place) => {
        // show place's description
    }
    fixtureStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };
    changeCountryColor = (event) => {
        event.target.setStyle({
          color: "green",
          fillColor: this.state.color,
          fillOpacity: 1,
        });
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
    
    render() {
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
                
                <GeoJSON style={this.fixtureStyle} ref={this.geoJsonLayer} data={streetlights.features} onEachFeature={this.onEachFixture}/>
                <MarkerClusterGroup
                        spiderfyDistanceMultiplier={1}
                        showCoverageOnHover={false}
                >   
                {
                        streetlights.features.map((dataItem, k) => {
                        //let { coordinates, company, url, loc } = dataItem;
                        
                            let coordinates = dataItem.geometry.coordinates;
                            let fixtureStyle = dataItem.properties.FIXTURE_ST;
                            return(
                            <Marker
                                key={k}
                                center={[coordinates[0], coordinates[1]]}
                                position={[coordinates[0], coordinates[1]]}
                                icon = {this.markerIcon}
                            >
                            <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                                <span>{fixtureStyle}</span>
                            </Tooltip>
                            </Marker>
                            );
                        })
                }
                </MarkerClusterGroup>
               
            </MapContainer>
        :
            'Data is loading...'
        )
    }

}

/*

                {
                this.props.streetlights['features'].map(streetlight => {
                    const point = [streetlight['geometry']['coordinates'][1], streetlight['geometry']['coordinates'][0]]
                    
                    return (
                        <Marker position={point} key={streetlight['properties']['GRID_ADDRE']} >
                        
                        </Marker>
                    )
                }) <GeoJSON style={this.fixtureStyle} ref={this.geoJsonLayer} data={streetlights.features} onEachFeature={this.onEachFixture}/>
                <Circle key={k} center={[coordinates[0], coordinates[1]]} pathOptions={{ fillColor: 'blue' }} radius={ 5 } /> 
                }

                
*/