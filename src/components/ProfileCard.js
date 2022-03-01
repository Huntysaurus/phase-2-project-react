import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";



function ProfileCard() {

    const [userProfile, setUserProfile] = useState(null)

    console.log(userProfile)

    useEffect(()=> {
        fetch("http://localhost:4000/profileData")
        .then(res => res.json())
        .then(data => setUserProfile(data))
    }, [])


    function handleUserProfile(profileObj) {
        console.log(profileObj)
        fetch("http://localhost:4000/profileData", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(profileObj)
        })
        .then(res => res.json())
        .then(data => setUserProfile(data))
        }

        if (userProfile === []) {
        return (
            <ProfileForm onProfileFormSubmit={handleUserProfile} />
                
        )
        } else {
                return (
                    <div key={userProfile[0].id}>
                    <h3>{userProfile[0].name}</h3>
                    <p>{userProfile[0].description}</p>
                    <p>{userProfile[0].interests}</p>
                    <img src={userProfile[0].photo} alt={userProfile[0].name}></img>
                    <button>edit profile</button>
                    <button>delete profile</button>
                </div>
            )
        }
    }

//profile card or form depending on if created or not

export default ProfileCard