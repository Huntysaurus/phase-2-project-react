import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
function ProfileCard({ profiles }) {

    const [like, setLike] = useState(false)

            return (

                <p>hello</p>
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