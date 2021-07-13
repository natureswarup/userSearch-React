import React from 'react'

import './searchBar.css'


const SearchBar = (props) => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-12 searchboxContainer">
                    <input type="text" placeholder={props.placeholder} onChange={props.handleChange} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar