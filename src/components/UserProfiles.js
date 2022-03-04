import React from "react";
import PublicProfileCard from "./PublicProfileCard";

function UserProfiles({ profiles }) {

    function onLike(profile) {
        console.log(profile)
    }
    
    return (
        <div>
            {profiles.map((profile) => {
                return (
                    <ul key={profile.id}>
                        <PublicProfileCard
                        profile={profile}
                        onLike={onLike}
                        />
                    </ul>
                )
            })}
        </div>
    )
}

export default UserProfiles