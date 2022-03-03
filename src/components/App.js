import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Home from "./Home";
import NavBar from "./NavBar";
import ProfileForm from "./ProfileForm";
import Login from "./Login";
import UserProfiles from "./UserProfiles"

function App() {

    const [user, setUser] = useState(false)
    const [profiles, setProfiles] = useState([])
    const [name, setName] = useState("")
    const [gender, setGender] = useState("male")
    const [interests, setInterests] = useState("")
    const [profilePicture, setProfilePicture] = useState("")

    useEffect(()=> {
        fetch("http://localhost:4000/profiles")
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, [])


    function handleProfileLogin(e) {
        e.preventDefault()
        const foundProfile = profiles.find((p) => {
            return p.name === name
        })
        if (foundProfile) {
            setUser(foundProfile)
        } else {
        alert("hmm... That name isn't in our records. Make sure to check spelling and casing!")
    }}

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

        function handleNameChange(e) {
            setName(e.target.value)
        }
    
        function handleGenderChange(e) {
            setGender(e.target.value)
        }
    
        function handleInterestChange(e) {
            setInterests(e.target.value)
        }
    
        function handleProfilePictureChange(e) {
            setProfilePicture(e.target.value)
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
                <Route>
                    <UserProfiles />
                </Route>
            </Switch> 
            : 
            // logged out
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signup">
                    <ProfileForm onProfileFormSubmit={handleUserProfile} profiles={profiles} user={user} name={name} gender={gender} interests={interests} profilePicture={profilePicture} onHandleGenderChange={handleGenderChange} onHandleNameChange={handleNameChange} onHandleInterestChange={handleInterestChange} onHandleProfilePictureChange={handleProfilePictureChange}  />
                </Route>          
                <Route exact path="/login">
                    <Login name={name} onHandleNameChange={handleNameChange} onLoginSubmit={handleProfileLogin}/>    
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