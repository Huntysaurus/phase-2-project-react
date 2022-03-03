import React from "react";

function Login({user, profiles}) {
    return (
        <>
            <div>
                <p>already have an account? Login!</p>
            </div>
            <form>
            <label>
                    Name:
                    <input type='text'
                    placeholder='type your name here'
                    />
                </label>
            </form>
        </>
    )
}

export default Login