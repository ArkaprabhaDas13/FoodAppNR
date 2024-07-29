import { constrainedMemory } from "process"
import React from "react"
import { useState, useEffect } from "react"
import { ShimmerPostList } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
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

    const cardData = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    console.log("Cards = ",resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)


    const allCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    //Filtering the ItemCategories by @type property
    const categories = allCards.filter((everyCard)=>everyCard.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)

    return(
        
        <div className="menu text-center dark:bg-purple-950">
            <h1 className="font-bold text-3xl m-3">{name}</h1>
            <p>{cuisines.join(", ")}</p>

            {categories.map((i)=>{
                return(
                    <RestaurantCategory className="m-2 p-2 shadow-md" data={i.card.card.title} />
                )
            })}

        </div>
    )
}

export default RestaurantMenu


// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=223838&catalog_qa=undefined&submitAction=ENTER