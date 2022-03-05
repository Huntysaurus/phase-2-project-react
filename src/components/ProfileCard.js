import React from "react";

function ProfileCard({ user, onDeleteProfile, likedProfiles, onUnlikeProfile }) {

    console.log(likedProfiles)

    function onUnlike(profile) {
        const updatedProfiles = likedProfiles.filter((lp) => {
            return lp !== profile
        })
        onUnlikeProfile(updatedProfiles)
    }

    return (
        <>
            <h1>/Your Profile/</h1>
            <div key={user.id}>
                <h3>{user.name}</h3>
                <img src={user.profilePicture} alt={user.name}></img>
                <p>{user.gender}</p>
                <p>{user.description}</p>
                <p>/Interests/ {user.interests}</p>
                <button>edit profile</button>
                <button onClick={()=>onDeleteProfile(user.id)}>delete profile</button>
            </div>
            <>
            <h2>/Buddy List/</h2>
                {likedProfiles.map((profile) => {
                    return (
                    <div key={profile.id}>
                    <h3>{profile.name}</h3>
                    <img src={profile.profilePicture} alt={profile.name}></img>
                    <p>{profile.description}</p>
                    <p>Interests:{profile.interests}</p>
                    <p>Gender:{profile.gender}</p>
                    <button onClick={() => onUnlike(profile)}>unlike</button>
                    </div>
                    )
                })}
            </>
        </>
        ) 
    }

export default ProfileCard