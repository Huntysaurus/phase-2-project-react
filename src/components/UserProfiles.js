import React from "react";
import PublicProfileCard from "./PublicProfileCard";
import Search from "./Search"

function UserProfiles({ profiles, onHandleProfileSearch, onSearchSubmit }) {
    
    return (
        <>
        <Search profiles={profiles} onSetSearch={onHandleProfileSearch} onSearchSubmit={onSearchSubmit}/>
        {profiles.map((profile) => {
            return (
                <ul key={profile.id}>
                    <PublicProfileCard
                    profile={profile}
                    />
                </ul>
            )
        })}
        </>
    )
}

export default UserProfiles