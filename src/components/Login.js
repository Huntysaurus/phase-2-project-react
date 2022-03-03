import React from "react";

function Login({name, onHandleNameChange, onLoginSubmit}) {
    return (
        <>
            <div>
                <p>already have an account? Login!</p>
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