import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Home from "./Home";
import NavBar from "./NavBar";
import ProfileForm from "./ProfileForm";

function App() {

    const [user, setUser] = useState(true)
    const [profiles, setProfiles] = useState([])

    useEffect(()=> {
        fetch("http://localhost:4000/profiles")
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, [])


    function handleUserProfile(profileObj) {
        console.log(profileObj)
        fetch("http://localhost:4000/profiles", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(profileObj)
        })
        .then(res => res.json())
        .then(data => {
            setProfiles([...profiles, data])
            setUser(data)
        })
        }
    
    return (
        <div>
            <Header />
            <NavBar user={user} onSignOutClick={()=>setUser(false)}/>
            {user ? 

            //logged in
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/profilecard">
                    <ProfileCard />
                </Route>
            </Switch> 
            : 
            // logged out
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signup">
                    <ProfileForm onProfileFormSubmit={handleUserProfile} profiles={profiles} user={user} />
                </Route>                
            </Switch>
            }
        </div>
    )
}

//   app
//    |
//   Home - Header - Profile - comments - NavBar
//    |
//   ProfileCards
export default App