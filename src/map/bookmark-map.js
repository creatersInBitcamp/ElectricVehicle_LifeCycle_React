import React,{useState,useCallback,useRef} from "react";
import { GoogleMap,useLoadScript,Marker,InfoWindow,} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode,getLatLng,getZipCode} from "use-places-autocomplete";
import Geocode from 'react-geocode'
import {Combobox,ComboboxInput, ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './map.scss'
import "@reach/combobox/styles.css";

const MAP_KEY = 'AIzaSyDgxaAVu6wZkfdefa5F1tDC6bVGXvLTqg0';

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
    lat: 36.8728622,
    lng: 128.0718825
};
const charging_station = [
    {
        "charging_station_id": 1,
        "unit_name": "종묘 공영주차장",
        "charger_id": "1",
        "charger_type_id": 3,
        "charger_type": "DC차데모 + AC3상",
        "charger_state": "충전가능",
        "address": "서울특별시 종로구 종로 157, 지하주차장 4층 하층 T구역",
        "x_value": 37.571076,
        "y_value": 126.99588,
        "business_hours": "24시간 이용가능",
        "agency_name": "환경부",
        "phone": "1661-9408",
        "update_date": "2.02E+13",
        "boosting_charge": "급속(50kW)"
    },
    {
        "charging_station_id": 2,
        "unit_name": "세종로 공영주차장",
        "charger_id": "1",
        "charger_type_id": 6,
        "charger_type": "DC차데모 + AC3상 + DC콤보",
        "charger_state": "충전가능",
        "address": "서울특별시 종로구 세종대로 189, 지하주차장 4층 D구역 계단실 앞",
        "x_value": 37.573611,
        "y_value": 126.976011,
        "business_hours": "24시간 이용가능",
        "agency_name": "환경부",
        "phone": "1661-9408",
        "update_date": "2.02E+13",
        "boosting_charge": "급속(50kW)"
    },
    {
        "charging_station_id": 3,
        "unit_name": "그랜드앰배서더 서울",
        "charger_id": "1",
        "charger_type_id": 6,
        "charger_type": "DC차데모 + AC3상 + DC콤보",
        "charger_state": "충전가능",
        "address": "서울특별시 중구 동호로 287, 대형버스주차장",
        "x_value": 37.559352,
        "y_value": 127.00235,
        "business_hours": "24시간 이용가능",
        "agency_name": "환경부",
        "phone": "1661-9408",
        "update_date": "2.02E+13",
        "boosting_charge": "급속(50kW)"
    },
    {
        "charging_station_id": 4,
        "unit_name": "한강진역 공영주차장",
        "charger_id": "1",
        "charger_type_id": 3,
        "charger_type": "DC차데모 + AC3상",
        "charger_state": "충전가능",
        "address": "서울특별시 용산구 한남동 산10-84, 지상실외주차장",
        "x_value": 37.540085,
        "y_value": 127.002804,
        "business_hours": "24시간 이용가능",
        "agency_name": "환경부",
        "phone": "1661-9408",
        "update_date": "2.02E+13",
        "boosting_charge": "급속(50kW)"
    },
    {
        "charging_station_id": 5,
        "unit_name": "마장동사무소 앞(공중전화부스)",
        "charger_id": "1",
        "charger_type_id": 6,
        "charger_type": "DC차데모 + AC3상 + DC콤보",
        "charger_state": "충전가능",
        "address": "서울특별시 성동구 마장동 808",
        "x_value": 37.5660935,
        "y_value": 127.0455256,
        "business_hours": "24시간 이용가능",
        "agency_name": "환경부",
        "phone": "1661-9408",
        "update_date": "2.02E+13",
        "boosting_charge": "급속(50kW)"
    },
];
const sights = [
    {
        "sights_id": 432,
        "name": "구암서원",
        "street_address": "대구광역시 북구 연암공원로17길 20",
        "branch_address": "대구광역시 북구 산격동 산79-1",
        "x_value": 35.89881592,
        "y_value": 128.5990001,
        "capacity": 500,
        "parking_lot": 30,
        "info": "대구광역시 북구 8경사진찍기좋은명소"
    },
    {
        "sights_id": 433,
        "name": "함지공원",
        "street_address": "대구광역시 북구 동암로38길 9",
        "branch_address": "대구광역시 북구 구암동 775-6",
        "x_value": 35.9424608,
        "y_value": 128.570482,
        "capacity": 10000,
        "parking_lot": 100,
        "info": "대구광역시 북구 8경사진찍기좋은명소"
    },
    {
        "sights_id": 434,
        "name": "경북대학교 캠퍼스",
        "street_address": "대구광역시 북구 대학로80",
        "branch_address": "대구광역시 북구 산격동 1370-1",
        "x_value": 35.88909849,
        "y_value": 128.6143217,
        "capacity": 50000,
        "parking_lot": 5000,
        "info": "대구광역시 북구 8경사진찍기좋은명소"
    },
    {
        "sights_id": 435,
        "name": "금호강하중도",
        "street_address": null,
        "branch_address": "대구광역시 북구 노곡동 673",
        "x_value": 35.900092,
        "y_value": 128.559326,
        "capacity": 50000,
        "parking_lot": 2000,
        "info": "대구광역시 북구 8경사진찍기좋은명소"
    },
    {
        "sights_id": 436,
        "name": "팔달대교 야경",
        "street_address": null,
        "branch_address": "대구광역시 북구 팔달동 524-4",
        "x_value": 35.895353,
        "y_value": 128.550766,
        "capacity": 1000,
        "parking_lot": 0,
        "info": "대구광역시 북구 8경사진찍기좋은명소"
    }
];

const BookmarkMap = () =>{
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region:'kr'
    });
    const [ selected, setSelected ] = useState({});
    const [ currentPosition, setCurrentPosition ] = useState({});
    const [ searchLocation, setSearchLocation] = useState({})
    const [markers, setMarkers] = useState([]);
    const [selectedAddr, setSelectedAddr]= useState("")
    const [selectedPc,setSelectedPc] = useState("")
    const [infoShow, setInfoShow]= useState(false)

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
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
                console.log(response)
                const address = response.results[0].formatted_address
                const length = response.results[0].address_components.length
                const postcode = response.results[0].address_components[length-1].long_name
                console.log(postcode.indexOf('-'))
                if(postcode.indexOf('-') != -1){ //결과값이 없으면 -1 반환
                    setSelectedPc(postcode)
                }else{
                    setSelectedPc("정보없음")
                }
                setSelectedAddr(address)
                console.log(address);
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
                // console.log(results[0]) formatted address, compo 전부 가져옴
                const { lat, lng } = await getLatLng(results[0]);
                const postal_code = await getZipCode(results[0],false)
                panTo({ lat, lng });
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
                                onClick={onMapClick}
                                onLoad={onMapLoad}
                            >
                                {
                                    charging_station.map((store, i) => (
                                        <Marker
                                            key={i}
                                            position={{lat:store.x_value, lng:store.y_value}}
                                            onClick={()=>setSelected(store)}
                                            icon={
                                                { url : "https://image.flaticon.com/icons/svg/3198/3198588.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)}
                                            }

                                        />
                                    ))
                                }
                                {
                                    sights.map((store, i) => (
                                        <Marker
                                            key={i}
                                            position={{lat:store.x_value, lng:store.y_value}}
                                            onClick={()=>setSelected(store)}
                                            icon={
                                                { url : "https://image.flaticon.com/icons/svg/3198/3198482.svg",
                                                    scaledSize : new window.google.maps.Size(40,40)}
                                            }

                                        />
                                    ))
                                }
                                {
                                    selected.charging_station_id && (
                                        <InfoWindow
                                            position={{lat:selected.x_value, lng:selected.y_value}}
                                            clickable={true}
                                            onCloseClick={()=>setSelected({})}
                                        >
                                            <div className="infowindow">
                                                <MDBCol>
                                                    <MDBCard>
                                                        <MDBCardBody>
                                                            <MDBCardTitle><h3>{selected.unit_name}</h3></MDBCardTitle><br/>
                                                            <MDBCardText>
                                                                <h4>충전기 타입: {selected.charger_type}</h4><br/>
                                                                <h4>상태: {selected.charger_state}</h4><br/>
                                                                <h4>주소: {selected.address}</h4><br/>
                                                                <h4>운영시간: {selected.business_hours}</h4><br/>
                                                                <h4>관리부서: {selected.agency_name}</h4><br/>
                                                                <h4>연락처: {selected.phone}</h4><br/>
                                                            </MDBCardText>
                                                            <MDBBtn color="warning" onClick={()=>deleteBookmark(selected.charging_station_id)}>북마크삭제</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            </div>
                                        </InfoWindow>
                                    )
                                }
                                {
                                    selected.sights_id && (
                                        <InfoWindow
                                            position={{lat:selected.x_value, lng:selected.y_value}}
                                            clickable={true}
                                            onCloseClick={()=>setSelected({})}
                                        >
                                            <div className="infowindow">
                                                <MDBCol>
                                                    <MDBCard>
                                                        <MDBCardBody>
                                                            <MDBCardTitle><h3>{selected.name}</h3></MDBCardTitle><br/>
                                                            <MDBCardText>
                                                                <h4>지번주소: {selected.branch_address}</h4><br/>
                                                                <h4>도로명주소: {selected.street_address}</h4><br/>
                                                                <h4>수용인원수: {selected.capacity}</h4><br/>
                                                                <h4>주차가능수: {selected.parking_lot}</h4><br/>
                                                                <h4>관광지 정보: {selected.info}</h4><br/>
                                                            </MDBCardText>
                                                            <MDBBtn color="warning" onClick={()=>deleteBookmark(selected.sights_id)}>북마크삭제</MDBBtn>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            </div>
                                        </InfoWindow>
                                    )
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
                                    markers.map((marker) => (
                                        <Marker
                                            key={`${marker.lat}-${marker.lng}`}
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
                                                                <h3><span>우편번호 </span></h3><br/>
                                                                <h4>{selectedPc} </h4><br/>
                                                                <h3><span>주소</span></h3><br/>
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

export default BookmarkMap