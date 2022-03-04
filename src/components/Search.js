import React, { useState } from "react";

function Search({ onSetSearch, onSearchSubmit }) {

    const [search, setsearch] = useState("")

    function onSearchChange(e) {
        setsearch(e.target.value)
        onSetSearch(search)
    }

    return (
        <div>
        <h3>Looking for common ground?</h3>
        <form onSubmit={onSearchSubmit}>
            <input
            type="text"
            id="search"
            placeholder="Find a shared interest!"
            value={search}
            onChange={(e)=> onSearchChange(e)}
            />
        </form>
        </div>
    )
}

export default Search