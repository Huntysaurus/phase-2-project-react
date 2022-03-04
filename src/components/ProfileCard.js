import React from "react";

function ProfileCard({ user, onDeleteProfile }) {
    return (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.gender}</p>
                <p>{user.description}</p>
                <p>{user.interests}</p>
                <img src={user.profilePicture} alt={user.name}></img>
                <button>edit profile</button>
                <button onClick={()=>onDeleteProfile(user.id)}>delete profile</button>
            </div>
            )    
    }

export default ProfileCard