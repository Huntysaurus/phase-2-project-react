import React from "react";
import { Card, Button } from "react-bootstrap";

function PublicProfileCard({ profile, onLike }) {
    return (
        <Card style={{width: "50rem", marginLeft: "auto", marginRight: "auto"}} key={profile.id}>
            <h3 style={{backgroundColor:"#ADC5D9", color:"#021140"}}>{profile.name}</h3>
            <Card.Img src={profile.profilePicture} alt={profile.name}/>
            <p style={{backgroundColor:"#593F44", color:"white"}}>Gender: {profile.gender}</p>
            <Card.Body style={{backgroundColor:"#ADC5D9", color:"#593F44"}}>{profile.description}</Card.Body>
            <p style={{backgroundColor:"#010A26", color:"#DCE6F2"}}>Interests: {profile.interests}</p>
            <Button style={{width: "10rem"}} onClick={(e) => onLike(profile)}>like</Button>
        </Card>
    )
}

export default PublicProfileCard