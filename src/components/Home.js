import React, { useEffect } from "react";

function Home() {

    useEffect(() => {
        console.log("home mounted")
    }, [])
    const background = {backgroundImage:"url('https://media.gettyimages.com/photos/group-of-friends-making-way-to-a-bar-picture-id1124489891?s=2048x2048')", backgroundSize: 'cover', position:"relative",padding:"2%", color:"#010A26"}
    
    return (
        <div style={background}>
            <h1 style={{fontSize:"600%", fontWeight:"bold"}}>/Network/</h1>
            <h1 style={{fontSize:"600%", fontWeight:"bold"}}>/Collab/</h1>
            <h1 style={{fontSize:"600%", fontWeight:"bold"}}>/Date/</h1>
            <h1 style={{fontSize:"600%", fontWeight:"bold"}}>/Friend/</h1>
        </div>
    )
}

export default Home