import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = ()=>{

    const error = useRouteError()

    return(
        <>
            <h1>Opps!</h1>
            <p>Something went wrong !</p>
        </>
    )
}

export default Error