import React, { useState } from "react";
import PublicProfileCard from "./PublicProfileCard";

function UserProfiles({ profiles }) {

    const[likedProfiles, setLikedProfiles] = useState([])

    function onLike(profile) {
        console.log(profile)
    }
    
    return (
        <>
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
        </>
    )
}

export default UserProfiles