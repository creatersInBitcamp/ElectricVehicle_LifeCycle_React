import React,{useState,useEffect,useRef} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-directions/dist/mapbox-gl-directions.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import ReactMapGL,{Marker,Popup,NavigationControl,FlyToInterpolator} from 'react-map-gl'
import Directions from 'react-map-gl-directions'
import Geocoder from 'react-map-gl-geocoder'
import '../assets/css/map.css'
import * as _ from 'underscore';

const MapBox = () => {
    const MAP_TOKEN = 'pk.eyJ1IjoianVuaHdhIiwiYSI6ImNrY3Q4NG5xNDE3bDIyeXBnZzg0NzZ0YzYifQ.c4ILQswrvoXNzakCMy82Hg';

    const[viewport,setViewport] = useState({
        latitude:37.546223,
        longitude: 126.898838,
        width:'100%',
        height:'850px',
        zoom:13
    });

    const mapRef = useRef(null);

    const storeList = [
        {
            name: '울집',
            location: {lat:37.550928, lng:126.867306},
            address: '서울 강서구 공항대로63길 14',
            image : 'http://blogfiles.naver.net/20140627_280/k3j0y_1403839325403kA42u_PNG/pic_courtauction_7.jpg'
        },
        {
            name: '등촌역',
            location: {lat:37.551174, lng:126.864613},
            address: '서울 강서구 공항대로 529',
            image : 'data:image/jpeg;base64,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'
        },
        {
            name: '강서보건소',
            location: {lat:37.549650, lng:126.868251},
            address: '서울 강서구 공항대로 561 강서보건소' ,
            image : 'https://mblogthumb-phinf.pstatic.net/MjAxODA0MjNfMTc5/MDAxNTI0NDgwNDkwOTkw.-AIefKUje7S0oKcSSkaLLawiXllaIsASRQ42I38-FGEg.zvaTwvVvSOlE3_OMWDR6TbeHVolSq1ZU6aPH0rgFfXQg.JPEG.tjduswn3577/20180417_103431.jpg?type=w800'
        },
        {
            name: 'CU 등촌점',
            location: {lat:37.550999, lng:126.8589698},
            address: '서울 강서구 공항대로 549' ,
            image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20200109_34%2F1578536934584lARkQ_PNG%2FG4sy524RQNZsd00KCNdMc-Oy.png&type=f&size=780x288'
        },
        {
            name: '스타벅스 등촌역점',
            location: {lat:37.548885, lng:126.868082},
            address: '서울 양천구 공항대로 566' ,
            image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20190828_93%2F1566953601239OT9MQ_PNG%2FxX7Wv642gXMoTI0DAv0hRymS.png&type=f&size=780x288'
        },
        {
            name: '비트캠프 신촌점',
            location: {lat:37.5525892, lng:126.9367663},
            address: '서울 마포구 백범로 23 구프라자 3층' ,
            image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20180327_45%2F1522132708687HXxYX_JPEG%2FIA-KnDb1r3Z1VCsRbhuhycRR.jpg'
        }
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
        <div>
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="dashboard-left">
                                <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"/> back
                                    </span>
                                </div>
                                <div className="block-content">
                                    <ul>
                                        <li className="active"><a href='#'>홈</a></li>
                                        <li><a href="#">검색</a></li>
                                        <li><a href="#">길찾기</a></li>
                                        <li className="last"><a href="#">즐겨찾기</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="dashboard-right">
                                <div className={"Mapbox"}>
                                    <ReactMapGL
                                        ref={mapRef}
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
                                        <Directions
                                            mapRef={mapRef}
                                            unit={'metric'}
                                            profile={'mapbox/driving'}
                                            mapboxApiAccessToken={MAP_TOKEN}
                                            position={'top-left'} />
                                        <Geocoder
                                            mapRef={mapRef}
                                            onViewportChange={(viewport)=>{
                                                setViewport(viewport);
                                            }}
                                            mapboxApiAccessToken={MAP_TOKEN}
                                            placeholder={ '충전소를 검색해주세요.'}
                                            position={'top-left'}
                                        />

                                        {
                                            storeList.map((store, i) => (
                                                <Marker
                                                    key={i}
                                                    latitude={store.location.lat}
                                                    longitude={store.location.lng}
                                                >
                                                    <button className={"btn-marker"} onClick={()=>setSelectedStore(store)}/>
                                                </Marker>
                                            ))
                                        }
                                        {
                                            selectedStore && (
                                                <Popup
                                                    offsetLeft={10}
                                                    latitude={selectedStore.location.lat}
                                                    longitude={selectedStore.location.lng}
                                                    onClose={()=>setSelectedStore(null)}
                                                >
                                                    <div>{selectedStore.name}</div>
                                                </Popup>
                                            )
                                        }
                                    </ReactMapGL>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
};

export default MapBox;