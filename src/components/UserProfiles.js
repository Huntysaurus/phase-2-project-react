import React, { useState } from "react";
import PublicProfileCard from "./PublicProfileCard";

function UserProfiles({ profiles, onLike }) {
    
    return (
        <>
        <h1>/Explore/</h1>
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