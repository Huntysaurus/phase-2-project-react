import React, { useState } from "react";

function Search({ profiles }) {

    const [search, setsearch] = useState("")

    function onSearchChange(e) {
        console.log(profiles)
        setsearch(e.target.value)
        console.log(search)
    }

    return (
        <div>
        <h3>Looking for common ground?</h3>
        <form>
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