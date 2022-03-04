import { v4 as uuid} from "uuid"
import React from "react";

function ProfileForm({ onProfileFormSubmit, user, profiles, name, gender, interests, profilePicture, description, onHandleNameChange, onHandleGenderChange, onHandleDescriptionChange, onHandleInterestChange, onHandleProfilePictureChange}) {

    function handleSubmit(e) {
        e.preventDefault()
        const foundProfile = profiles.find((p) => {
            return p.name === name
        })
        if (foundProfile) {
            alert("profile exists")
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

        <form onSubmit={handleSubmit}>
                <h2>Create Your Profile</h2>
                <label>
                    Name:
                    <input type='text'
                    placeholder='type your name here'
                    value={name}
                    onChange={onHandleNameChange}
                    />
                </label>
                <label>
                    Gender:
                    <select
                    name="Gender"
                    value={gender}
                    onChange={onHandleGenderChange}
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
                    placeholder='What brings you here?'
                    value={description}
                    onChange={onHandleDescriptionChange}
                    />
                </label>
                <label>
                    Interests
                    <input type='text'
                    placeholder='What are your interests?'
                    value={interests}
                    onChange={onHandleInterestChange}
                    />
                </label>
                <label>
                    Profile Picture
                    <input type='text'
                     placeholder='add your profile picture!'
                     value={profilePicture}
                     onChange={onHandleProfilePictureChange}
                     />
                </label>
                <button type="submit">Create</button>
        </form>
    )
}

export default ProfileForm