import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/profile">
                Profile
            </NavLink>
            <NavLink to="/comments">
                Comments
            </NavLink>
        </div>
    )
}

export default NavBar;