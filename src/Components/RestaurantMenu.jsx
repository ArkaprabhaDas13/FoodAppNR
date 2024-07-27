import { constrainedMemory } from "process"
import React from "react"
import { useState, useEffect } from "react"
import { ShimmerPostList } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = ()=>{

    // const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)            // custom hook gets the data from the API



    if(resInfo === null)
    {
        return(
            <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
        )
    }

    const {name, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info

    const cardData = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards
    console.log(cardData)

    return(
        
        <div className="menu">

            <h1>{name}</h1>

            <h3>Cuisines</h3>
            <p>{cuisines.join(', ')}</p>

            <h3>Menu</h3>

            <ul>
                {/* <li>{cardData[0].card.info.name}</li>
                <li>Lassi</li>
                <li>Chai</li> */}

                {cardData.map((item)=><li key={item.card.info.id}>
                    {item.card.info.name}  - <h4>Rs{(item.card.info.price)/100}</h4> 
                    <img src="" alt="" />
                </li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu


// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=223838&catalog_qa=undefined&submitAction=ENTER