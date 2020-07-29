import React, { useState } from 'react'
import { Search } from 'react-feather';

const SearchHeader = (preGlobalFilteredRows, globalFilter, setGlobalFilter) => {
    const [value, setValue] = useState('')
    const [searchbar, setSearchbar] = useState(false)
    const handleSearchClick = () => {
        setSearchbar(!searchbar)
    }
    const search = e => {
        setValue(e.target.value)
    }
    return (
            <>
                <form className="form-inline search-form">
                    <div className="form-group">
                        <input className={"form-control-plaintext " + (searchbar ? 'open' : '')} type="search" placeholder="Search.." onChange={search} />
                        <span className="d-sm-none mobile-search" onClick={handleSearchClick}><Search /></span>
                    </div>
                </form>
            </>
        )
}
export default SearchHeader
