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
    const [description, setDescription] = useState("")
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
            // const ignoreProfile = profiles.find((p) => {
            //     return p.name !== foundProfile.name
            // })
            setUser(foundProfile)
            // setProfiles(ignoreProfile)

            // can't figure out the logic with setting getting the public profiles to ignore the current user
        } else {
        alert("hmm... That name isn't in our records. Make sure to check spelling and casing!")
    }}

    function handleDeleteProfile(id) {
        fetch(`http://localhost:4000/profiles/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(user => setUser(false))
    }

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

        function handleProfileSearch(search) {
            console.log(search)
            const filteredProfiles = profiles.filter(profile => {
                return profile.interests.toLowerCase().includes(search.toLowerCase())
            })
            setProfiles(filteredProfiles)
        }

        function handleSearchSubmit() {
            console.log('hello')
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

        function handleDescriptionChange(e) {
            setDescription(e.target.value)
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
                    <ProfileCard user={user} onDeleteProfile={handleDeleteProfile}/>
                </Route>
                <Route>
                    <UserProfiles profiles={profiles} onHandleProfileSearch={handleProfileSearch} onSearchSubmit={handleSearchSubmit}/>
                </Route>
            </Switch> 
            : 
            // logged out
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signup">
                    <ProfileForm onProfileFormSubmit={handleUserProfile} profiles={profiles} user={user} name={name} gender={gender} interests={interests} description={description} profilePicture={profilePicture} onHandleDescriptionChange={handleDescriptionChange} onHandleGenderChange={handleGenderChange} onHandleNameChange={handleNameChange} onHandleInterestChange={handleInterestChange} onHandleProfilePictureChange={handleProfilePictureChange}  />
                </Route>          
                <Route exact path="/login">
                    <Login name={name} onHandleNameChange={handleNameChange} onLoginSubmit={handleProfileLogin}/>    
                </Route>      
            </Switch>
            }
        </div>
    )
}

export default App