import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard"
import Search from "./Search";

function Home() {

    const [like, setLike] = useState(true)
    const profiles = [{
        "id": 1,
        "name": "Henry",
        "photo": "https://media.gettyimages.com/photos/positive-mind-positive-life-picture-id1145043860?k=20&m=1145043860&s=612x612&w=0&h=jgbCb2NmcisVDR8YMYUoAqeeQjzLjV05zV33HfuzNVU=",
        "description": "I love playing COD Modern Warfare and listening to classical music. Looking for more gamer friends",
        "interests": "gaming, classical music, biking, dogs, local restaurants"
    },
    {
        "id": 2,
        "name": "Laura",
        "photo": "https://media.gettyimages.com/photos/portrait-of-businesswoman-on-street-while-commuting-to-work-picture-id1219033788?k=20&m=1219033788&s=612x612&w=0&h=Rxt3RF2UvrvQTc69hje2U9BfOx-mdVeyOA2jQYTDVEY=",
        "description": "When I'm not baking something I'm painting in my studio-would love to get some friends together at a local print-making class!",
        "interests": "baking, painting, karaoke, dogs, fantasy novels"
    },
    {
        "id": 3,
        "name": "Zeke",
        "photo": "https://media.gettyimages.com/photos/young-bearded-man-smiling-picture-id641381112?k=20&m=641381112&s=612x612&w=0&h=vwyZM9ZaoL5FNLgJHPOqysAxPgSWFnletaHB3lmjwJ4=",
        "description": "Been spending the last year traveling. I love anything dealing with the great outdoors and hiking!",
        "interests": "hiking, swimming, surfing"
    },
    {
        "id": 4,
        "name": "Steph",
        "photo": "https://media.gettyimages.com/photos/young-woman-working-on-desktop-computer-at-home-picture-id1252473585?k=20&m=1252473585&s=612x612&w=0&h=JiwSFcsuPuzeCH87H54WWCajGDUmESpe_aMij1KxYxA=",
        "description": "I spend all day coding lol. Any other coders here??",
        "interests": "gaming, game development, D&D, cats, techno"
    },
    {
        "id": 5,
        "name": "Anthony",
        "photo": "https://media.gettyimages.com/photos/young-athletic-man-standing-in-outdoor-basketball-court-picture-id837736042?k=20&m=837736042&s=612x612&w=0&h=TsMaLIuWK40_AxABtoAOzGfmrSLiFIW9kqGb_mX_aDI=",
        "description": "I like a good party... Looking for more partiers lol",
        "interests": "techno, clubbing, COD Modern Warfare"
    },
    {
        "id": 6,
        "name": "H",
        "photo": "https://media.gettyimages.com/photos/portrait-of-mature-woman-laughing-picture-id901578768?k=20&m=901578768&s=612x612&w=0&h=ofKBuAwEZ4zZ34OEusJBS6lu8VPCGlDOJzOzDnouxeI=",
        "description": "Profesional Interior Decorator. I'm pretty into thre art scene and always looking for good auctions and galleries. Always looking to expand my social network",
        "interests": "classical art, mid-century modern, cats, hiking"
    }]
    
    return (
        <>
           <h1>Find a New Friend!</h1>
           <Search/>
            {profiles.map(profile => {
                return (
                        <div key={profile.id}>
                            <h3>{profile.name}</h3>
                            <p>{profile.description}</p>
                            <p>{profile.interests}</p>
                            <img src={profile.photo} alt={profile.name}></img>
                            <button onClick={() => setLike(true)}>Like</button>
                        </div>
                        )
                    }
                )
            }
        </>
    )
}

//this is where other profiles will show up. (See your profile in side panel?)
//can view other profiles and like them here. Can click on a profile to view in depth? Comment on it? search feature for specific key words?
//profiles you like will end up in seperate panel on this page

export default Home