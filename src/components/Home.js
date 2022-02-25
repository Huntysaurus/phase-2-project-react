import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard"

function Home() {

    const [profiles, setProfiles] = useState([])

    // useEffect(()=> {
    //     fetch("http://localhost:3000/profiles")
    //     .then(r => r.json())
    //     .then(data => setProfiles(data))
    // }, [])
    
    return (
        <>
           <h1>Find a New Friend</h1>
            <div>
                <ProfileCard profiles={profiles} />
            </div>
        </>
    )
}

//this is where other profiles will show up. (See your profile in side panel?)
//can view other profiles and like them here. Can click on a profile to view in depth? Comment on it? search feature for specific key words?
//profiles you like will end up in seperate panel on this page

export default Home