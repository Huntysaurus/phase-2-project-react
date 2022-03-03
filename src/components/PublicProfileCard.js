import React from "react";

function PublicProfileCard({ profile }) {
    return (
        <div key={profile.id}>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <p>Interests:{profile.interests}</p>
            <p>Gender:{profile.gender}</p>
            <img src={profile.profilePicture} alt={profile.name}></img>
            <button>edit profile</button>
            <button>delete profile</button>
        </div>
    )
}

export default PublicProfileCard