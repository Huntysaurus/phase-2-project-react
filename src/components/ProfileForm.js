import { getByPlaceholderText } from "@testing-library/react";
import { v4 as uuid} from "uuid"
import React, { useState } from "react";

function ProfileForm({ onProfileFormSubmit }) {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("male")
    const [interests, setInterests] = useState("")
    const [profilePicture, setProfilePicture] = useState("")

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

    function handleSubmit(e) {
        e.preventDefault()
        onProfileFormSubmit({
            id: uuid(),
            name,
            gender,
            interests,
            profilePicture,
        })
    }
    return (

        <form onSubmit={handleSubmit}>
                <h2>Create Your Profile</h2>
                <label>
                    Name:
                    <input type='text'
                    placeholder='type your name here'
                    value={name}
                    onChange={handleNameChange}
                    />
                </label>
                <label>
                    Gender:
                    <select
                    name="Gender"
                    value={gender}
                    onChange={handleGenderChange}
                    >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="gender fluid">gender fluid</option>
                        <option value="non-binary">non-binary</option>
                    </select>
                </label>
                <label>
                    Interests
                    <input type='text'
                    placeholder='tell us about yourself!'
                    value={interests}
                    onChange={handleInterestChange}
                    />
                </label>
                <label>
                    Profile Picture
                    <input type='text'
                     placeholder='add your profile picture!'
                     value={profilePicture}
                     onChange={handleProfilePictureChange}
                     />
                </label>
                <button type="submit">Create</button>
        </form>
    )
}



//if no profile, then option to create one. If profile, option to update or delete

export default ProfileForm