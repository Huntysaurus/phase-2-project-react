import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";



function ProfileCard() {

    const [profile, setProfile] = useState(false)
    const [profileData, setProfileData] = useState([])

    console.log('entire object', profileData)
    console.log('profile', profile)

    useEffect(()=> {
        fetch("http://localhost:4000/profileData")
        .then(res => res.json())
        .then(data => setProfileData(data))
    }, [])


    function handleUserProfile(profileObj) {
        setProfile(true)
        console.log(profileObj)
        fetch("http://localhost:4000/profileData", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(profileObj)
        })
        .then(res => res.json())
        .then(data => setProfileData(data))
        }

        if (profile === true) {
        return (
                <div key={profileData[0].id}>
                    <h3>{profileData[0].name}</h3>
                    <p>{profileData[0].description}</p>
                    <p>{profileData[0].interests}</p>
                    <img src={profileData[0].photo} alt={profileData[0].name}></img>
                    <button>edit profile</button>
                    <button>delete profile</button>
                </div>

        )
        } else {
                return (
                <ProfileForm onProfileFormSubmit={handleUserProfile} />
            )
        }
    }

//individual profile cards get created in here and displayed inside the Home component

export default ProfileCard