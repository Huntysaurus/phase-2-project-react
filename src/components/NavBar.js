import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NavBar({ user, onSignOutClick }) {
    
    return (
        <div style={{backgroundColor:"#ADC5D9"}}>
            <NavLink to="/" style={{marginLeft:30, fontSize:"20px"}}>
                Home
            </NavLink>
            { user ? 
            <>
                <NavLink to="/profilecard" style={{marginLeft:30, fontSize:"20px"}}>
                    Profile
                </NavLink>
                <NavLink to="/userprofiles" style={{marginLeft:30, fontSize:"20px"}}>
                    Users
                </NavLink>
                    <p style={{marginTop:20}}>
                        <Button onClick={()=>onSignOutClick()}>
                            Logout
                        </Button>
                    </p>
            </> 
            :
            <>
                <NavLink to="/signup" style={{marginLeft:30, fontSize:"20px"}}>
                    Signup
                </NavLink>
                <NavLink to="/login" style={{marginLeft:30, fontSize:"20px"}}>
                    Login
                </NavLink>
            </>
            }
        </div>
    )
}

export default NavBar;