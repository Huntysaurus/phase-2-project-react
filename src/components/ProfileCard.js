import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
function ProfileCard({ profiles }) {


    const [userProfile, setUserProfile] = useState("")

    useEffect(()=> {
        fetch("http://localhost:3000")
        .then(res => res.fson())
        .then(data => handleUserProfile(data))
    }, [])


        function handleUserProfile(profileObj) {
            setUserProfile(profileObj)
            console.log(userProfile)
        }

            return (
                <div>
                    <ProfileForm onProfileFormSubmit={handleUserProfile} />
                </div>

            // <div key={profile.id}>
            //     <h3>{profile.name}</h3>
            //     <p>{profile.description}</p>
            //     <p>{profile.interests}</p>
            //     <img src={profile.photo} alt={profile.name}></img>
            //     <button onClick={() => setLike(true)}>Like</button>
            // </div>

            )
        }

//individual profile cards get created in here and displayed inside the Home component

export default ProfileCard