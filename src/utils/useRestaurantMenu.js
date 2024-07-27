import { useEffect, useState } from "react";

const useRestaurantMenu = (resId)=>{
    
    const [resInfo, setResInfo] = useState(null)

    // fetch data
    
    useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        console.log(json)
        setResInfo(json)
    }


    return resInfo;
}

export default useRestaurantMenu

// useRestaurantMenu get resId as a parameter and returns resInfo 