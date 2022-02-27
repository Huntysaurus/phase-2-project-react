import { getByPlaceholderText } from "@testing-library/react";
import { v4 as uuid} from "uuid"
import React, { useState } from "react";

function ProfileForm({ onProfileFormSubmit }) {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("male")
    const [interests, setInterests] = useState("")
    const [profilePicture, setProfilePicture] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onProfileFormSubmit({
            id: uuid()
        })
    }
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <h2>Create Your Profile</h2>
                <label>
                    Name:
                    <input type='text'
                    placeholder='type your name here'/>
                    value={name}
                </label>
                <label>
                    Gender:
                    <select name="Gender">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="gender fluid">gender fluid</option>
                        <option value="non-binary">non-binary</option>
                    </select>
                </label>
                <label>
                    Interests
                    <input type='text' placeholder='tell us about yourself!'/>
                </label>
                <label>
                    Profile Picture
                    <input type='text' placeholder='add your profile picture!'/>
                </label>
            </div>
        </form>
    )
}



//if no profile, then option to create one. If profile, option to update or delete

export default ProfileForm