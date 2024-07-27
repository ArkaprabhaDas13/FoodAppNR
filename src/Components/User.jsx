import React from 'react'

const User = ({name, location, contribution})=>{
    return (
        <div className="user-card">

            <h1>{name}</h1>
            <h2>{location}</h2>           
            <h3>{contribution}</h3>
            <p>Contact</p>

        </div>
    )
}

export default User