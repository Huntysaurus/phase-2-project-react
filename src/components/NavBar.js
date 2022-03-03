import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            { user ? 
            <>
                <NavLink to="/profilecard">
                Profile
            </NavLink>
            <NavLink to="/comments">
                Comments
            </NavLink>
           
                <button>
                    sign out
                </button>
            
            </> :
                <>
                <NavLink to="/signup">
                Sign Up
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
                </>
            }
        </div>
    )
}

export default NavBar;