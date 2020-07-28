import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng} from "use-places-autocomplete";
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import '../assets/css/map.css'
import "@reach/combobox/styles.css";
import Breadcrumb from "../common/breadcrumb";

const libraries = ["places"];

const mapContainerStyle = {
    width: "100%",
    height: "830px",
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 37.549816,
    lng: 126.892794,
};
const storeList = [
    {
        name: '울집',
        location: {lat:37.550928, lng:126.867306},
        address: '서울 강서구 공항대로63길 14',
        image : 'data:image/jpeg;base64,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'
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
const BookmarkMap = () =>{
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDgxaAVu6wZkfdefa5F1tDC6bVGXvLTqg0',
        libraries,
        region:'kr'
    });
    const [ selected, setSelected ] = useState({});
    const [ currentPosition, setCurrentPosition ] = useState({});
    const [ searchLocation, setSearchLocation] = useState({})
    const [ check, setCheck] = useState('')

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(16);
    }, []);



    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    function Locate({ panTo }) {
        return (
            <button
                className="locate"
                onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            panTo({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            });
                            const currentPosition = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }
                            setCurrentPosition(currentPosition);
                        },
                        () => null
                    );
                }}
            >
                <img src="https://image.flaticon.com/icons/png/128/487/487021.png"/>
            </button>
        );
    }
    function Search({ panTo }) {
        const {
            ready,
            value,
            suggestions: { status, data },
            setValue,
            clearSuggestions,
        } = usePlacesAutocomplete({
            requestOptions: {
                location: { lat: () => 37.553818, lng: () => 126.886020 },
                radius: 200 * 1000,
            },
        });

        const handleInput = (e) => {
            setValue(e.target.value);
        };

        const handleSelect = async (address) => {
            setValue(address, false);
            clearSuggestions();

            try {
                const results = await getGeocode({ address });
                const { lat, lng } = await getLatLng(results[0]);
                panTo({ lat, lng });
                const searchLocation = {
                    lat: lat,
                    lng: lng
                }
                setSearchLocation(searchLocation);
            } catch (error) {
                console.log("😱 Error: ", error);
            }
        };

        return (
            <div className="search">
                <Combobox onSelect={handleSelect}>
                    <ComboboxInput
                        value={value}
                        onChange={handleInput}
                        disabled={!ready}
                        placeholder="북마크"
                    />
                    <ComboboxPopover>
                        <ComboboxList>
                            {status === "OK" &&
                            data.map(({ id, description }) => (
                                <ComboboxOption key={id} value={description} />
                            ))}
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="dashboard-left">
                            <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"/> back
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="dashboard-right">
                            <Locate panTo={panTo} />
                            <Search panTo={panTo} />

                            <GoogleMap
                                id="map"
                                mapContainerStyle={mapContainerStyle}
                                zoom={6}
                                center={center}
                                options={options}
                                onLoad={onMapLoad}
                            >
                                {
                                    storeList.map((store, i) => (
                                        <Marker
                                            key={i}
                                            position={store.location}
                                            onClick={()=>setSelected(store)}
                                            icon={
                                                { url : "https://image.flaticon.com/icons/svg/3228/3228628.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)}
                                            }

                                        />
                                    ))
                                }
                                {
                                    selected.location && (
                                        <InfoWindow
                                            position={selected.location}
                                            clickable={true}
                                            onCloseClick={()=>setSelected({})}
                                        >
                                            <div className="infowindow">
                                                <p>{selected.name}</p>
                                                <img src={selected.image} className="small-image" alt="rental"/><br/><br/>
                                                <p>주소: {selected.address}</p>
                                            </div>
                                        </InfoWindow>
                                    )
                                }
                                {
                                    currentPosition.lat ?
                                        <Marker
                                            position={currentPosition}
                                            icon={
                                                { url : "https://image.flaticon.com/icons/svg/2536/2536611.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)}
                                            }
                                        />
                                        :null
                                }
                                {
                                    searchLocation.lat ?
                                        <Marker
                                            position={searchLocation}
                                            icon={
                                                { url : "https://image.flaticon.com/icons/svg/2948/2948278.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)}
                                            }
                                        />
                                        :null
                                }
                            </GoogleMap>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookmarkMap