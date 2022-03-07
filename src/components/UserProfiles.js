import PublicProfileCard from "./PublicProfileCard";

function UserProfiles({ profiles, onLike }) {
    
    return (
        <>
        <h1 style={{backgroundColor:"#593F44", color:"white"}}>/Explore/</h1>
            <div style={{backgroundColor:"#021140"}}>
                {profiles.map((profile) => {
                    return (
                        <ul key={profile.id}>
                            <PublicProfileCard
                            profile={profile}
                            onLike={onLike}
                            />
                        </ul>
                    )
                })}
            </div>
        </>
    )
}

export default UserProfiles