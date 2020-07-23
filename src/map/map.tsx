import React,{useState,useEffect} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL,{Marker,Popup,NavigationControl,FlyToInterpolator} from 'react-map-gl'
import '../assets/css/map.css'
import * as _ from 'underscore';

const Map = () => {
    const MAP_TOKEN = 'pk.eyJ1IjoianVuaHdhIiwiYSI6ImNrY3Q4NG5xNDE3bDIyeXBnZzg0NzZ0YzYifQ.c4ILQswrvoXNzakCMy82Hg';

    const[viewport,setViewport] = useState({
        latitude:37.553818,
        longitude: 126.886020,
        width:'100%',
        height:'97vh',
        zoom:13
    });


    const storeList = [
        { name: '울집', location: [37.550928, 126.867306] },
        { name: '등촌역', location: [37.551174, 126.864613] },
        { name: '강서보건소', location: [37.549650, 126.868251] },
        { name: 'CU 등촌점', location: [37.550999, 126.8589698] },
        { name: '스타벅스 등촌역점', location: [37.548885, 126.868082] },
        { name: '비트캠프 신촌점', location: [37.5525892, 126.9367663] }
    ];

    const [selectedStore, setSelectedStore] = useState();

    useEffect(() => {
        const mapResizeEvent = _.throttle(() => {
            setViewport(Object.assign({}, {
                ...viewport,
                width: `${window.innerWidth}px`,
                height: `${window.innerHeight}px`
            }));
        }, 2000);
        window.addEventListener('resize', mapResizeEvent);
        return () => {
            window.removeEventListener('resize', mapResizeEvent);
        }
    }, [ viewport ]);

    return (
        <div className={"Mapbox"}>
            <ReactMapGL
                {...viewport}
                transitionDuration={800}
                transitionInterpolator = {new FlyToInterpolator()}
                mapboxApiAccessToken={MAP_TOKEN}
                mapStyle={"mapbox://styles/mapbox/streets-v11"}
                onViewportChange={(viewport)=>{
                    setViewport(viewport);
                }}
            >
                <div className={"navi-control"}>
                    <NavigationControl/>
                </div>

                {
                    storeList.map((store, i) => (
                        <Marker
                            key={i}
                            latitude={store.location[0]}
                            longitude={store.location[1]}
                        >
                            <button className={"btn-marker"} onClick={()=>setSelectedStore(store)}/>
                        </Marker>
                    ))
                }
                {
                    selectedStore && (
                        <Popup
                            offsetLeft={10}
                            latitude={selectedStore.location[0]}
                            longitude={selectedStore.location[1]}
                            onClose={()=>setSelectedStore(null)}
                        >
                            <div>{selectedStore.name}</div>
                        </Popup>
                    )
                }
            </ReactMapGL>
        </div>
    );
};

export default Map;