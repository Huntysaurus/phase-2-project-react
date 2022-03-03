import React from "react";

function PublicProfileCard({ profile }) {
    return (
        <div key={profile.id}>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <p>{profile.interests}</p>
            <img src={profile.photo} alt={profile.name}></img>
            <button>edit profile</button>
            <button>delete profile</button>
        </div>
    )
}

export default PublicProfileCard