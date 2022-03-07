import React from "react";
import { Card, Button } from "react-bootstrap";

function ProfileCard({ user, onDeleteProfile, likedProfiles, onUnlikeProfile }) {

    function onUnlike(profile) {
        const updatedProfiles = likedProfiles.filter((lp) => {
            return lp !== profile
        })
        onUnlikeProfile(updatedProfiles)
    }

    return (
        <div style={{backgroundColor:"#ADC5D9"}}>
            <h1 style={{backgroundColor:"#593F44", color:"white"}}>/Your Profile/</h1>
            <Card style={{width:"60rem", marginLeft:"auto", marginRight:"auto", marginBottom:"2%"}} key={user.id}>
                <h3>{user.name}</h3>
                <img src={user.profilePicture} alt={user.name}></img>
                <p style={{backgroundColor:"#593F44", color:"white"}}>Gender: {user.gender}</p>
                <p style={{backgroundColor:"#ADC5D9", color:"#593F44"}}>{user.description}</p>
                <p style={{backgroundColor:"#010A26", color:"#DCE6F2"}}>Interests: {user.interests}</p>
                <Button style={{width: "10rem"}} onClick={()=>onDeleteProfile(user.id)}>delete profile</Button>
            </Card>
            <h1 style={{backgroundColor:"#593F44", color:"white"}}>/Buddy List/</h1>
                {likedProfiles.map((profile) => {
                    return (
                    <Card style={{width:"40rem", marginLeft:"auto", marginRight:"auto", marginBottom:"2%", marginTop:"2%"}} key={profile.id}>
                        <h3>{profile.name}</h3>
                        <img src={profile.profilePicture} alt={profile.name}></img>
                        <p style={{backgroundColor:"#593F44", color:"white"}}>Gender: {profile.gender}</p>
                        <p style={{backgroundColor:"#ADC5D9", color:"#593F44"}}>{profile.description}</p>
                        <p style={{backgroundColor:"#010A26", color:"#DCE6F2"}}>Interests: {profile.interests}</p>
                        <Button style={{width: "10rem"}} onClick={() => onUnlike(profile)}>unlike</Button>
                    </Card>
                    )
                })}
        </div>
        ) 
    }

export default ProfileCard