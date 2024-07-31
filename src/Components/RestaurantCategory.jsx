import React from "react";
import {useState} from 'react';
import ItemList from './ItemList'

export default RestaurantCategory = ({data, open, setIsOpen})=>{


    const handleClick = ()=>{
        // console.log("Button Clicked!")
        setIsOpen()
    }

    return(
        <div className="w-6/12 my-5 mx-auto border shadow-md p-3 font-mono rounded-lg bg-blue-50">

            {/* Accordian Header */}
            <button onClick={handleClick} className="w-full">                                                                               {/* I made the entire Accordian Heading clickable */}
                <div className="flex p-1 mx-auto justify-between">

                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
            </button>

            {/* Acccordian Body */}
            
            {open && <ItemList items={data.itemCards}/>}

        </div>
    )

}