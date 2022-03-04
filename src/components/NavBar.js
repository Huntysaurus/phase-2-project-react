import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, onSignOutClick }) {
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
                <NavLink to="/userprofiles">
                    Users
                </NavLink>
                <NavLink to="/buddylist">
                    Buddy List
                </NavLink>
                <button onClick={()=>onSignOutClick()}>
                    Logout
                </button>
            </> 
            :
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