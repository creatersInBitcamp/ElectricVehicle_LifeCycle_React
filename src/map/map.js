import React, {useEffect, useState} from 'react';
import Breadcrumb from "../common/breadcrumb";
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL,{Marker,Popup,NavigationControl,FlyToInterpolator} from 'react-map-gl'
import '../assets/css/map.css'
import * as _ from 'underscore';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import MapboxLanguage from '@mapbox/mapbox-gl-language'

mapboxgl.accessToken = 'pk.eyJ1IjoianVuaHdhIiwiYSI6ImNrY3Q4NG5xNDE3bDIyeXBnZzg0NzZ0YzYifQ.c4ILQswrvoXNzakCMy82Hg';

class Map extends React.Component  {
    componentDidMount() {
        // Creates new map instance
        const map = new mapboxgl.Map({
            container: this.mapWrapper,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [126.886020,37.553818],
            zoom:13
        });

        //Change Language
        mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js');
        map.addControl(new MapboxLanguage({
            defaultLanguage: 'ko'
        }));

        // Creates new directions control instance
        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving'
        });

        // Integrates directions control with map
        map.addControl(directions, 'top-left');

        var geojson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [126.867306, 37.550928]
                    },
                    properties: {
                        title: '울집',
                        description: '서울 강서구 공항대로63길 14'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [126.864613, 37.551174]
                    },
                    properties: {
                        title: '등촌역',
                        description: '서울 강서구 공항대로 529'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [126.868251, 37.549650]
                    },
                    properties: {
                        title: '강서보건소',
                        description: '서울 강서구 공항대로 561 강서보건소'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [126.8589698, 37.550999]
                    },
                    properties: {
                        title: 'CU 공항대로점',
                        description: '서울 강서구 공항대로 549'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [126.868082, 37.548885]
                    },
                    properties: {
                        title: '스타벅스 등촌역점',
                        description: '서울 양천구 공항대로 566'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [126.9367663, 37.5525892]
                    },
                    properties: {
                        title: '비트캠프 신촌점',
                        description: '서울특별시 강서구 공항대로 529'
                    }
                }
            ]
        };
        geojson.features.forEach(function(marker) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                .addTo(map);
        });

        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());
    }

    render() {
        return (
            // Populates map by referencing map's container property
            <>
                <div
                    ref={el => (this.mapWrapper = el)}
                    className="mapWrapper"
                />
            </>

        );
    }

};

export default Map;