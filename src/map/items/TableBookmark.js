import React, {useCallback, useEffect, useRef, useState} from 'react'
import 'react-table/react-table.css';
import MaterialTable from 'material-table';
import {GoogleMap,Marker, useLoadScript} from "@react-google-maps/api";
import axios from "axios";
import {MAP_KEY, AWS_PATH} from '../../api/key'

const sessionUser = JSON.parse(sessionStorage.getItem('user'))

const libraries = ["places"];

const mapContainerStyle = {
    width: "900px",
    height: "500px",
};
const options = {
    zoomControl: true,
};

export const TableBookmark = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
        libraries,
        region:'kr'
    });
    const [selectedRow, setSelectedRow] = useState(null);
    const [myData,setMyData] = useState([])
    const [user,setUser] = useState(sessionUser)
    const userId = user.userSeq
    const products=[]

    useEffect(()=>{
        axios.get(`${AWS_PATH}/bookmarks/getallbookmark/${userId}`)
            .then((res)=>{
                let size = res.data.length
                for(let i=0; i<size; i++){
                    products.push(res.data.shift().place)
                }
                setMyData(products)
            })
            .catch((err)=>{
                console.log(err.status)
            })
    },[])

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const columns=[
        // { title: '충전기 타입', field: 'chargerType' },
        { title: '이름', field: 'name' },
        { title: '주소', field: 'address' },
        { title: '카테고리', field: 'category', defaultGroupOrder: 0}
        // { title: '운영시간', field: 'businessHours'},
        // { title: '충전기 상태', field: 'chargerState'}
    ]

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return (

        <>
            <MaterialTable
                title="북마크한 충전소"
                columns={columns}
                data={myData}
                options={
                    {
                        search:true,
                        pageSize:10,
                        columnsButton:true,
                        maxBodyHeight: 700,
                        grouping: true,
                        rowStyle: rowData => ({
                            // height:"20px",
                            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                        }),
                        /*headerStyle: {
                            backgroundColor: '#9bba19',
                            color: '#FFF'
                        },
                        exportButton:true,
                        filtering:true*/
                    }
                }
                detailPanel={rowData => {
                    if(rowData.category === 'station'){
                        return (
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div>
                                    <div className="modal-body">
                                        <div>
                                            <GoogleMap
                                                id="map"
                                                mapContainerStyle={mapContainerStyle}
                                                zoom={14}
                                                center={{lat:rowData.xvalue,lng:rowData.yvalue}}
                                                options={options}
                                                onLoad={onMapLoad}
                                            >
                                                <Marker
                                                    position={{lat:rowData.xvalue,lng:rowData.yvalue}}
                                                    icon={
                                                        {
                                                            url: "https://image.flaticon.com/icons/svg/2489/2489241.svg",
                                                            scaledSize: new window.google.maps.Size(40, 40)
                                                        }
                                                    }
                                                />
                                            </GoogleMap>
                                        </div>
                                        <div>
                                            <br/>
                                            <h3>이름 : {rowData.name}</h3>
                                            <h3>주소 : {rowData.address}</h3>
                                            <h3>충전기 타입 : {rowData.chargerType}</h3>
                                            <h3>충전기 상태 : {rowData.chargerState}</h3>
                                            <h3>이용 시간 : {rowData.businessHours}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }else if(rowData.category === 'sights'){
                        return (
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div>
                                    <div className="modal-body">
                                        <div>
                                            <GoogleMap
                                                id="map"
                                                mapContainerStyle={mapContainerStyle}
                                                zoom={14}
                                                center={{lat:rowData.xvalue,lng:rowData.yvalue}}
                                                options={options}
                                                onLoad={onMapLoad}
                                            >
                                                <Marker
                                                    position={{lat:rowData.xvalue,lng:rowData.yvalue}}
                                                    icon={
                                                        {
                                                            url: "https://image.flaticon.com/icons/svg/2489/2489241.svg",
                                                            scaledSize: new window.google.maps.Size(40, 40)
                                                        }
                                                    }
                                                />
                                            </GoogleMap>
                                        </div>
                                        <div>
                                            <br/>
                                            <h3>이름 : {rowData.name}</h3>
                                            <h3>지번주소 : {rowData.address}</h3>
                                            <h3>도로명주소 : {rowData.streetAddress}</h3>
                                            <h3>수용인원수 : {rowData.capacity}</h3>
                                            <h3>주차가능수 : {rowData.parkingLot}</h3>
                                            <h3>관광지 정보 : {rowData.info}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
                onRowClick={(evt, selectedRow,togglePanel) => togglePanel()}
            />
        </>
    );
}

export default TableBookmark
