import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props)=>{
    
    const {resData} = props
    // console.log(resData);
    const {name, avgRating, locality, cuisines, costForTwo} = resData.info
    // console.log(name);

    return(
        <div className='m-4 p-4 bg-blue-100 rounded-lg w-72 h-[400px] shadow-xl hover:bg-blue-50 dark:bg-sky-900'>
            
            <img className='rounded-lg w-[224] h-[264]' src={CDN_URL+resData.info.cloudinaryImageId} alt="" />
            
            <div className='flex flex-col mt-4'>
                <p className='font-bold text-neutral-600 mb-2 text-lg dark:text-gray-300'>{name}</p>
                {/* <p>{cuisines.join(", ")}</p> */}
                <p className='text-neutral-500 dark:text-gray-400'>{locality}</p>
                <p className='text-neutral-500 dark:text-gray-400'>{costForTwo}</p>
                <h4 className='text-neutral-500 dark:text-gray-400'>{avgRating}</h4>
                
            </div>

        </div>
    ) 
}

export default RestaurantCard