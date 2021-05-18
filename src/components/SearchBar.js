import React, { useState } from 'react';

const SearchBar = (props) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.search(inputValue)
    }

    return (
        <div>
            <form className="form-inline my-2 ml-1 " onSubmit={handleSubmit}>
                <input className="form-control mr-sm-4"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />

                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>

            </form>

        </div>
    )
}


export default SearchBar;