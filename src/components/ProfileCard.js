import React from "react";

function ProfileCard({ user }) {
    return (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.description}</p>
                <p>{user.interests}</p>
                <img src={user.photo} alt={user.name}></img>
                <button>edit profile</button>
                <button>delete profile</button>
            </div>
            )    
    }

export default ProfileCard