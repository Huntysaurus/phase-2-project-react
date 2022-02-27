import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
function ProfileCard() {


    const [userProfile, setUserProfile] = useState([{
        id:0,
        name:"",
        description:"",
        interests:"",
        photo:""
    }
    ])

    // useEffect(()=> {
    //     fetch("http://localhost:3000")
    //     .then(res => res.json())
    //     .then(data => handleUserProfile(data))
    // }, [])


        function handleUserProfile(profileObj) {
            setUserProfile(profileObj)
            console.log(userProfile)
        }
            if (userProfile.includes(userProfile.id > 0)) {
            return (
                    <div key={userProfile.id}>
                        <h3>{userProfile.name}</h3>
                        <p>{userProfile.description}</p>
                        <p>{userProfile.interests}</p>
                        <img src={userProfile.photo} alt={userProfile.name}></img>
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