import {useEffect, useState} from 'react'

const useOnlineStatus = ()=>{
    
    const [status, setStatus] = useState(true)

    useEffect(()=>{

        window.addEventListener("offline", ()=>{                    // this is an inbuilt event listener which is called infinitely. So to stop the infinite loop, we are using useEffect so that it is called only once
            setStatus(false)
        })

    }, [])

    return status

}

export default useOnlineStatus;