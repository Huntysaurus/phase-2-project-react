import { v4 as uuid} from "uuid"
import React from "react";
import{ Form, Button, Container} from "react-bootstrap"

function ProfileForm({ onProfileFormSubmit, profiles, name, gender, interests, profilePicture, description, onHandleNameChange, onHandleGenderChange, onHandleDescriptionChange, onHandleInterestChange, onHandleProfilePictureChange}) {
    
    const inputStyles={backgroundColor:"#010A26", color:"#DCE6F2", fontSize:"20px", padding:5, marginTop:"10px", marginBottom:"20px"}

    function handleSubmit(e) {
        e.preventDefault()
        const foundProfile = profiles.find((p) => {
            return p.name === name
        })
        if (foundProfile) {
            alert("Sorry, but this name already exists in our database...")
        } else {
        onProfileFormSubmit({
            id: uuid(),
            name,
            gender,
            interests,
            description,
            profilePicture,
        })
    }}
    return (
    <>
    <h1 style={{backgroundColor:"#593F44", color:"white"}}>/Create Your Profile/</h1>
        <Container style={{backgroundColor:"#ADC5D9", padding:"1%"}}>
            <Form onSubmit={handleSubmit}>
                <p style={inputStyles}>Let everyone know who you are and why you're here!</p>
                <Form.Label style={inputStyles}>
                    Name:
                    <input style={{marginLeft:"10px"}} type='text'
                    placeholder='type your name here'
                    value={name}
                    onChange={onHandleNameChange}
                    />
                </Form.Label>
                <br></br>
                <Form.Label style={inputStyles}>
                    Gender: 
                    <select style={{marginLeft:"10px"}}
                    name="Gender"
                    value={gender}
                    onChange={onHandleGenderChange}
                    >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="gender fluid">gender fluid</option>
                        <option value="non-binary">non-binary</option>
                    </select>
                </Form.Label>
                <br></br>
                <Form.Label style={{backgroundColor:"#010A26", color:"#DCE6F2", fontSize:"20px", padding:5, marginTop:"10px", marginBottom:"20px", width:"80%"}}>
                    Description:
                    <input style={{marginLeft:"10px", width:"88.5%"}} type='text'
                    placeholder='What brings you here?'
                    value={description}
                    onChange={onHandleDescriptionChange}
                    />
                </Form.Label>
                <br></br>
                <Form.Label style={inputStyles}>
                    Interests:
                    <input style={{marginLeft:"10px"}} type='text'
                    placeholder='separated by commas'
                    value={interests}
                    onChange={onHandleInterestChange}
                    />
                </Form.Label>
                <br></br>
                <Form.Label style={inputStyles}>
                    Profile Picture:
                    <input style={{marginLeft:"10px"}} type='text'
                    placeholder='add your profile picture!'
                    value={profilePicture}
                    onChange={onHandleProfilePictureChange}
                    />
                </Form.Label>
                <br></br>
                <Button type="submit">Create</Button>
            </Form>
        </Container>
    </>
    )
}

export default ProfileForm