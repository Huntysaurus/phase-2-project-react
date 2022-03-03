import React from "react";
import PublicProfileCard from "./PublicProfileCard";

function UserProfiles({ profiles }) {
    return (
        profiles.map((profile) => {
            return (
                <ul key={profile.id}>
                    <PublicProfileCard
                    profile={profile}
                    />
                </ul>
            )
        })
    )
}

export default UserProfiles