
const STATION_REQUEST = 'STATION_REQUEST'
const STATION_MAP_REQUEST = 'STATION_MAP_REQUEST'
const SIGHTS_MAP_REQUEST = 'SIGHTS_MAP_REQUEST'

export const stationRequest = myData =>({ type:STATION_REQUEST,myData })
export const stationMapRequest = myData =>({
    type :STATION_MAP_REQUEST,
    myData
})
export const sightsMapRequest = myData =>({
    type :SIGHTS_MAP_REQUEST,
    myData
})

const stationReducer = (state={},action)=>{
    switch (action.type){
        case STATION_REQUEST:
            console.log(action)
            return {myData:action.myData}
        case STATION_MAP_REQUEST:
            return {myData:action.myData}
        case  SIGHTS_MAP_REQUEST:
            return {myData: action.myData}
        default:
            return state
    }
}
export default stationReducer;
