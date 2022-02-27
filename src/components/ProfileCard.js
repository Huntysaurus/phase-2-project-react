import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
function ProfileCard() {


    const [userProfile, setUserProfile] = useState("")

    useEffect(()=> {
        fetch("http://localhost:3000")
        .then(res => res.json())
        .then(data => handleUserProfile(data))
    }, [])


        function handleUserProfile(profileObj) {
            setUserProfile(profileObj)
            console.log(userProfile)
        }

            return (
                <div>
                    <ProfileForm onProfileFormSubmit={handleUserProfile} />
                    <div key={userProfile.id}>
                        <h3>{userProfile.name}</h3>
                        <p>{userProfile.description}</p>
                        <p>{userProfile.interests}</p>
                        <img src={userProfile.photo} alt={userProfile.name}></img>
                    </div>
                </div>

            )
        }

//individual profile cards get created in here and displayed inside the Home component

export default ProfileCard