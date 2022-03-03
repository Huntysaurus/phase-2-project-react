import React from "react";
import PublicProfileCard from "./PublicProfileCard";
import Search from "./Search"

function UserProfiles({ profiles }) {

    return (
        <>
        <Search />
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