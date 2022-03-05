import React from "react";

function Login({name, onHandleNameChange, onLoginSubmit}) {
    return (
        <>
            <div>
                <h1>/Login/</h1>
                <p>Already have an account?</p>
            </div>
            <form onSubmit={onLoginSubmit}>
            <label>
                    Log in with your Name:
                    <input type='text'
                    placeholder='type your name here'
                    value={name}
                    onChange={onHandleNameChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login