import React from 'react'
import { CDN_URL } from '../utils/constants';
import offerImg from '../utils/offerImg.png'

const RestaurantCard = (props)=>{
    
    const {resData} = props         // restaurant data
    const {name, avgRating, locality, cuisines, costForTwo} = resData.info      // destructuring resData

    return(
        <div className='m-4 p-4 bg-blue-100 rounded-lg w-72 h-[400px] shadow-xl hover:bg-blue-2 00 dark:bg-sky-900'>
            
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

// Higher Order Component -----------------------------------------------------------------------------------------------

// RestaurantCard ==>> RestaurantCardPromoted

// RestaurantCardPromoted is a HOC which takes RestaurantCard as input and returns another component as output

export const withEvenId = (RestaurantCard)=>{
    return (props)=>{                                        // Every component is basically a function
        console.log("Props = ",props)
        return(                             
            <div className=''>
                <p className='text-center bg-black text-white p-2 w-50 rounded-md h-10 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]'>Special Offer(HOC)</p>
                <RestaurantCard resData={props.resData}/>
            </div>
        )
    }
}

export default RestaurantCard