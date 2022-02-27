import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard"
import Search from "./Search";

function Home() {

    const [like, setLike] = useState(true)
    const profiles = [{
        "id": 1,
        "name": "Henry",
        "photo": "photohere",
        "description": "I love playing COD Modern Warfare and listening to classical music. Looking for more gamer friends",
        "interests": "gaming, classical music, biking, dogs, local restaurants"
    },
    {
        "id": 2,
        "name": "Laura",
        "photo": "photohere",
        "description": "When I'm not baking something I'm painting in my studio-would love to get some friends together at a local print-making class!",
        "interests": "baking, painting, karaoke, dogs, fantasy novels"
    },
    {
        "id": 3,
        "name": "Zeke",
        "photo": "https://shop.stockphotosecrets.com/stock-photo-preview/98162672/ing_32193_136005.jpg",
        "description": "Been spending the last year traveling. I love anything dealing with the great outdoors and hiking!",
        "interests": "hiking, swimming, surfing, soccer"
    },
    {
        "id": 4,
        "name": "Steph",
        "photo": "photohere",
        "description": "I spend all day coding lol. Any other coders here??",
        "interests": "gaming, game development, D&D, cats, techno"
    },
    {
        "id": 5,
        "name": "Anthony",
        "photo": "photohere",
        "description": "I like a good party... Looking for more partiers lol",
        "interests": "techno, clubbing, COD Modern Warfare"
    },
    {
        "id": 6,
        "name": "H",
        "photo": "photohere",
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