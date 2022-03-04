import React, { useState } from "react";
import PublicProfileCard from "./PublicProfileCard";
import Search from "./Search"

function UserProfiles({ profiles }) {
    
    return (
        <>
        <Search profiles={profiles}/>
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