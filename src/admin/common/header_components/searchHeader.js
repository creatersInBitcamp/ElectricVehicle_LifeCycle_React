import React, { useState } from 'react'
import { Search } from 'react-feather';

const SearchHeader = () => {
    const [searchbar, setSearchbar] = useState(false)
    const handleSearchClick = () => {
        setSearchbar(!searchbar)
    }
    return (
            <>
                <form className="form-inline search-form">
                    <div className="form-group">
                        <input className={"form-control-plaintext " + (searchbar ? 'open' : '')} type="search" placeholder="Search.." />
                        <span className="d-sm-none mobile-search" onClick={() => handleSearchClick()}><Search /></span>
                    </div>
                </form>
            </>
        )
}
export default SearchHeader
