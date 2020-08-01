import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng} from "use-places-autocomplete";
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import '../assets/css/map.css'
import './map.scss'
import "@reach/combobox/styles.css";
import myData from './data-sights';

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
    lat: 36.620505,
    lng: 128.001429,
};
const SightsMap = () =>{
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDgxaAVu6wZkfdefa5F1tDC6bVGXvLTqg0',
        libraries,
        region:'kr'
    });
    const [ selected, setSelected ] = useState({});
    const [ currentPosition, setCurrentPosition ] = useState({});
    const [ searchLocation, setSearchLocation] = useState({})

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
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
                <img src="https://image.flaticon.com/icons/png/128/487/487021.png" alt={"no"}/>
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
                        placeholder=" Search your location"
                        className={"form-control-plaintext "}
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

    function bookmark(info){
        alert(JSON.stringify(info))
        //정보를 db에 저장
    }

    function deleteBookmark(info){
        alert(JSON.stringify(info))
        //db에 저장된 정보 삭제
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
                                zoom={8}
                                center={center}
                                options={options}
                                onLoad={onMapLoad}
                            >
                                {
                                    myData.map((store, i) => (
                                        <Marker
                                            key={i}
                                            position={{lat:store.x_value, lng:store.y_value}}
                                            onClick={()=>setSelected(store)}
                                            icon={
                                                { url : "https://image.flaticon.com/icons/svg/3165/3165343.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)}
                                            }

                                        />
                                    ))
                                }
                                {
                                    selected.x_value && (
                                        <InfoWindow
                                            position={{lat:selected.x_value, lng:selected.y_value}}
                                            clickable={true}
                                            onCloseClick={()=>setSelected({})}
                                        >
                                            <div className="infowindow">
                                                <p>{selected.name}</p>
                                                {/*<img src={selected.image} className="small-image" alt="rental"/><br/><br/>*/}
                                                <p>지번주소: {selected.branch_address}</p>
                                                <p>도로명주소: {selected.street_address}</p>
                                                <p>수용인원수: {selected.capacity}</p>
                                                <p>주차가능수: {selected.parking_lot}</p>
                                                <p>관광지 정보: {selected.info}</p>
                                                <button onClick={()=>bookmark(selected)}>북마크</button>
                                                <button onClick={()=>deleteBookmark(selected.sights_id)}>북마크삭제</button>
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

export default SightsMap