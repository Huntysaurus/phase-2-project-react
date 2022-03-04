import React from "react";

function PublicProfileCard({ profile, onLike }) {
    return (
        <div key={profile.id}>
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <p>Interests:{profile.interests}</p>
            <p>Gender:{profile.gender}</p>
            <img src={profile.profilePicture} alt={profile.name}></img>
            <button onClick={(e) => onLike(profile.id)}>like</button>
        </div>
    )
}

export default PublicProfileCard