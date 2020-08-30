import React, {useState, useCallback, useRef, useEffect} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './map.css'
import "@reach/combobox/styles.css";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {stationMapRequest} from "./StationReducer";
import {MAP_KEY, AWS_PATH} from '../../api/key'

const sessionUser = JSON.parse(sessionStorage.getItem('user'))

const libraries = ["places"];

const mapContainerStyle = {
    width: "100%",
    height: "830px",
};
const options = {
    // disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 36.582921,
    lng: 128.075400
};

export const MapChargingStation = (props) =>{
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region:'kr'
    });
    const [user,setUser] = useState(sessionUser)
    const [ selected, setSelected ] = useState({});
    const [ currentPosition, setCurrentPosition ] = useState({});
    const [ searchLocation, setSearchLocation] = useState({})
    const [markers, setMarkers] = useState([]);
    const [selectedAddr, setSelectedAddr]= useState("")
    const [selectedPc,setSelectedPc] = useState("")
    const [infoShow, setInfoShow]= useState(false)
    const [myData,setMyData] = useState([])

    const dispatch = useDispatch()

    useEffect(()=>{
        sessionUser?(
            axios.get(`${AWS_PATH}/chargingstations/getall/${sessionUser.userSeq}`)
                .then((res)=>{
                    setMyData(res.data)
                    dispatch(stationMapRequest(res.data))
                })
                .catch((err)=>{
                    console.log('charging-staion-axios-error')
                })

        ):(
            axios.get(`${AWS_PATH}/chargingstations/getall`)
                .then((res)=>{
                    setMyData(res.data)
                    dispatch(stationMapRequest(res.data))
                })
                .catch((err)=>{
                    console.log(err.status)
                })
        )

    },[])

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => { //( panTo )의 경우 :  변경 사항이 지도의 너비와 높이보다 작 으면 전환이 부드럽게 움직입니다
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    const onMapClick = useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            },
        ]);
    }, []);

    const geocode = async (marker) => {
        Geocode.setApiKey(MAP_KEY);
        Geocode.setLanguage('ko')
        Geocode.fromLatLng(marker.lat,marker.lng).then(
            response => {
                const address = response.results[0].formatted_address
                const length = response.results[0].address_components.length
                const postcode = response.results[0].address_components[length-1].long_name
                if(postcode.indexOf('-') != -1){ //결과값이 없으면 -1 반환
                    setSelectedPc(postcode)
                }else{
                    setSelectedPc("정보없음")
                }
                setSelectedAddr(address)
            },
            error => {
                console.error(error);
            }
        );
    };

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    function Locate({ panTo }) {
        return (
            <button
                className="locate"
                onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const currentPosition = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }
                            panTo(currentPosition);
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
                location: { lat: () => 36.582921, lng: () => 128.075400 },// 검색할때의 이 지점에서부터 찾는다
                radius: 200 * 1000,//검색 반경
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
                const postal_code = await getZipCode(results[0],false)
                panTo({ lat, lng });
                setSelectedAddr(address)
                setSelectedPc(postal_code)
                setSearchLocation({ lat, lng });
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

    function insertBookmark(stationID){
        const id = {
            id : stationID,
            charging : true,
            userId: user.userSeq,
        }
        axios.post(`${AWS_PATH}/bookmarks/insert`,id)
            .then((res)=>{
                props.first.length>0?(
                    axios.get(`${AWS_PATH}/chargingstations/getmycar/${props.first[0].eccarId}/${sessionUser.userSeq}`)
                        .then((res)=>{
                            setMyData(res.data)
                            dispatch(stationMapRequest(res.data))
                        })
                        .catch((err)=>{
                            console.log('charging-staion-axios-error')
                        })
                ):(
                    axios.get(`${AWS_PATH}/chargingstations/getall/${sessionUser.userSeq}`)
                        .then((res)=>{
                            dispatch(stationMapRequest(res.data))
                        })
                        .catch((err)=>{
                            console.log(err.status)
                        })
                )
            })
            .catch((err) => {
                console.log("북마크 저장 실패")
            })
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
                                onClick={onMapClick}
                                onLoad={onMapLoad}
                            >
                                {
                                    myData.map((store, i) => (
                                        <Marker
                                            key={i}
                                            position={{lat:store.xvalue, lng:store.yvalue}}
                                            onClick={()=>setSelected(store)}
                                            icon={{
                                                    url : "https://image.flaticon.com/icons/svg/3198/3198588.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)
                                            }}
                                        />
                                    ))
                                }
                                {
                                    (selected.xvalue && (sessionUser)) ? (
                                        <InfoWindow
                                            position={{lat:selected.xvalue, lng:selected.yvalue}}
                                            clickable={true}
                                            onCloseClick={()=>setSelected({})}
                                        >
                                            <div className="infowindow">
                                                <MDBCol>
                                                    <MDBCard>
                                                        <MDBCardBody>
                                                            <MDBCardTitle><h3>{selected.name}</h3></MDBCardTitle><br/>
                                                            <MDBCardText>
                                                                <h4>충전기 타입: {selected.chargerType}</h4><br/>
                                                                <h4>상태: {selected.chargerState}</h4><br/>
                                                                <h4>주소: {selected.address}</h4><br/>
                                                                <h4>운영시간: {selected.businessHours}</h4><br/>
                                                                <h4>관리부서: {selected.agencyName}</h4><br/>
                                                                <h4>연락처: {selected.phone}</h4><br/>
                                                            </MDBCardText>
                                                            {
                                                                (selected.bookmarkList) && (sessionUser.userSeq === selected.userSeq)?
                                                                    <img src={"https://image.flaticon.com/icons/svg/2876/2876727.svg"} width={40} height={40}/>
                                                                    :<MDBBtn color="secondary" onClick={()=>insertBookmark(selected.chargingStationId)}>북마크 저장</MDBBtn>

                                                            }
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            </div>
                                        </InfoWindow>
                                    ) :null
                                }
                                {
                                    (selected.xvalue && (!sessionUser)) ? (
                                        (
                                            <InfoWindow
                                                position={{lat:selected.xvalue, lng:selected.yvalue}}
                                                clickable={true}
                                                onCloseClick={()=>setSelected({})}
                                            >
                                                <div className="infowindow">
                                                    <MDBCol>
                                                        <MDBCard>
                                                            <MDBCardBody>
                                                                <MDBCardTitle><h3>{selected.name}</h3></MDBCardTitle><br/>
                                                                <MDBCardText>
                                                                    <h4>충전기 타입: {selected.chargerType}</h4><br/>
                                                                    <h4>상태: {selected.chargerState}</h4><br/>
                                                                    <h4>주소: {selected.address}</h4><br/>
                                                                    <h4>운영시간: {selected.businessHours}</h4><br/>
                                                                    <h4>관리부서: {selected.agencyName}</h4><br/>
                                                                    <h4>연락처: {selected.phone}</h4><br/>
                                                                </MDBCardText>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                    </MDBCol>
                                                </div>
                                            </InfoWindow>)
                                    ):null
                                }
                                {
                                    currentPosition.lat ?
                                        <Marker
                                            position={currentPosition}
                                            onClick={() => {
                                                geocode(currentPosition)
                                                setSelected(currentPosition)
                                                setInfoShow(true)
                                            }}
                                            icon={{
                                                    url : "https://image.flaticon.com/icons/svg/3198/3198517.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)
                                            }}
                                        />
                                        :null
                                }
                                {
                                    searchLocation.lat ?
                                        <Marker
                                            position={searchLocation}
                                            onClick={() => {
                                                geocode(searchLocation)
                                                setSelected(searchLocation)
                                                setInfoShow(true)
                                            }}
                                            icon={{
                                                url : "https://image.flaticon.com/icons/svg/3198/3198467.svg",
                                                scaledSize : new window.google.maps.Size(40,40)
                                            }}
                                        />
                                        :null
                                }
                                {
                                    markers.map((marker,i) => (
                                        <Marker
                                            key={i}
                                            position={{ lat: marker.lat, lng: marker.lng }}
                                            onClick={() => {
                                                geocode(marker)
                                                setSelected(marker);
                                                setInfoShow(true)
                                            }}
                                            icon={{
                                                url: `https://image.flaticon.com/icons/svg/3198/3198591.svg`,
                                                scaledSize: new window.google.maps.Size(40, 40),
                                            }}
                                        />
                                    ))
                                }
                                {
                                    infoShow ? (
                                        <InfoWindow
                                            position={{ lat: selected.lat, lng: selected.lng }}
                                            onCloseClick={() => {setInfoShow(false);}}
                                            clickable={true}
                                        >
                                            <div>
                                                <MDBCol>
                                                    <MDBCard>
                                                        <MDBCardBody>
                                                            <MDBCardText>
                                                                <h3>우편번호</h3><br/>
                                                                <h4>{selectedPc} </h4><br/>
                                                                <h3>주소</h3><br/>
                                                                <h4>{selectedAddr} </h4>
                                                            </MDBCardText>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            </div>
                                        </InfoWindow>
                                    ) : null
                                }
                            </GoogleMap>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MapChargingStation