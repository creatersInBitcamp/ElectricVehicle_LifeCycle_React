import React, {useEffect, useState} from 'react'
import { Search } from 'react-feather';
import {useDispatch} from "react-redux";
import axios from 'axios'


const searchHeaderTypes = {REQUEST: 'searchHeader/REQUEST',
                           SUCCESS: 'searchHeader/SUCCESS',
                           USER_LIST: 'searchHeader/USER_LIST',
                           FAIL: 'searchHeader/FAIL'}

const searchHeaderRequest = () => ({type : searchHeaderTypes.REQUEST})
const searchHeaderSuccess = users  => ({type: searchHeaderTypes.SUCCESS, id: users})
const userListAction = users => ({type: searchHeaderTypes.USER_LIST, users})
const searchHeaderFail = errorMsg =>({type: searchHeaderTypes.FAIL, payload: errorMsg})

const searchHeaderReducer = (state={id:[]}, action) => {
    switch (action.type) {
        case searchHeaderTypes.REQUEST: return {...state }
        case searchHeaderTypes.SUCCESS: return {id: action.id}
        default: return state
    }
}
/*export const userListThunk = () => (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                const users = response.data
                dispatch(searchHeaderSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(searchHeaderFail(errorMsg))
            })
}*/


export const SearchHeader = (props) => {

    const [searchValue, setSearchValue] = useState('')
    const [data, setDate] = useState(props.myData)
    const [searchbar, setSearchbar] = useState(false)
    const dispatch = useDispatch()

    const inputSomething = (e) => {
        dispatch(searchHeaderSuccess(e.target.value))
    }
    useEffect(()=>{
        setDate(props.myData)
    },[props.myData])

    const handleSearchClick = () => {
        setSearchbar(!searchbar)
    }

    const globalSearch = () =>{
        setDate(data.filter(value => {
            value.car_name.includes(searchValue)
        })
        )
    }

    const handleSearch = (data) => {
        dispatch(searchHeaderSuccess(data))};

    const search = e => {
        setSearchValue(e.target.value.trim().toLowerCase())
        globalSearch()
    }

    return (
            <>
                <form className="form-inline search-form">
                    <div className="form-group">
                        <input className={"form-control-plaintext " + (searchbar ? 'open' : '')} type="search" placeholder="Search.." value={searchValue|| ""} />
                        <span className="d-sm-none mobile-search" ><Search /></span>
                        <input onChange={inputSomething}/>

                        <button onClick={(e)=>{handleSearch(e.valueOf(true))}}>그냥 버튼</button>
                    </div>
                </form>
            </>
        )
}
export default searchHeaderReducer
