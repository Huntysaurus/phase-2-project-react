import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard"
import Search from "./Search";

function Home() {

    const [like, setLike] = useState(true)
    const profiles = []
    
    return (
        <>
           <h1>Find a New Friend!</h1>
           <Search/>
            {profiles.map(profile => {
                return (
                        <div key={profile.id}>
                            <h3>{profile.name}</h3>
                            <p>{profile.description}</p>
                            <p>{profile.interests}</p>
                            <img src={profile.photo} alt={profile.name}></img>
                            <button onClick={() => setLike(true)}>Like</button>
                        </div>
                        )
                    }
                )
            }
        </>
    )
}

//this is where other profiles will show up. (See your profile in side panel?)
//can view other profiles and like them here. Can click on a profile to view in depth? Comment on it? search feature for specific key words?
//profiles you like will end up in seperate panel on this page

export default Home