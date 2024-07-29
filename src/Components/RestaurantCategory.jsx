import React from "react";
import {useState} from 'react';
import ItemList from './ItemList'

export default RestaurantCategory = ({data})=>{

    return(
        <div className="w-6/12 my-5 mx-auto border shadow-md p-3 font-mono rounded-lg">

            {/* Accordian Header */}

            <div className="flex p-1 mx-auto justify-between">

                <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
                <span className="material-symbols-outlined">
                    keyboard_arrow_down
                </span>
            </div>

            {/* Acccordian Body */}
            
            <ItemList items={data.itemCards}/>

        </div>
    )

}