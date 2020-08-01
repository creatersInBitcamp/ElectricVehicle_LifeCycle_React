import React, { useState } from 'react'
import { Search } from 'react-feather';
import {useDispatch} from "react-redux";


const searchHeaderTypes = {REQUEST: 'searchHeader/REQUEST'}
const searchHeaderRequestr = action => ({type:searchHeaderTypes.REQUEST, payload: action.payload})
const searchHeaderReducer = (state={}, action) => {
    switch (action.type) {
        case searchHeaderTypes.REQUEST: return {...state, payload:action.payload}
        default: return state
    }
}


export const SearchHeader = (props) => {

    const [searchValue, setSearchValue] = useState('')
    const [data, setDate] = useState(props.myData)
    const [searchbar, setSearchbar] = useState(false)
    const distpatch = useDispatch()

    const handleSearchClick = () => {
        setSearchbar(!searchbar)
    }

    const globalSearch = () =>{
        setDate(data.filter(value => {
            value.car_name.includes(searchValue)
        })
        )
    }

    const search = e => {
        setSearchValue(e.target.value.trim().toLowerCase())
        globalSearch()
    }

    return (
            <>
                <form className="form-inline search-form">
                    <div className="form-group">
                        <input className={"form-control-plaintext " + (searchbar ? 'open' : '')} type="search" placeholder="Search.." value={searchValue|| ""} onChange={search} />
                        <span className="d-sm-none mobile-search" onClick={handleSearchClick}><Search /></span>
                    </div>
                </form>
            </>
        )
}
export default searchHeaderReducer
