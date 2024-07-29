import React from "react";
import {useState} from 'react';
import ItemList from './ItemList'

export default RestaurantCategory = ({data})=>{

    const [open, setOpen] = useState(false)

    const handleClick = ()=>{
        console.log("Button Clicked!")
        setOpen(!open)
    }

    return(
        <div className="w-6/12 my-5 mx-auto border shadow-md p-3 font-mono rounded-lg bg-gray-50">

            {/* Accordian Header */}

            <div className="flex p-1 mx-auto justify-between">

                <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                <span className="material-symbols-outlined">
                    <button onClick={handleClick}>keyboard_arrow_down</button>
                </span>
            </div>

            {/* Acccordian Body */}
            
            {open && <ItemList items={data.itemCards}/>}

        </div>
    )

}