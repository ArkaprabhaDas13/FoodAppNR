import React from 'react'
import RestaurantCard , {withEvenId} from './RestaurantCard'
import { resObj } from '../utils/data'
import { useState, useEffect } from 'react'
// import Shimmer from './Shimmer'
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const Body = () => {

    const data = useContext(UserContext)

    console.log("context = ", data)
    const [list, setList] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchText, setSearchText] = useState("")
    
    

    const RestaurantCardEvenId = withEvenId(RestaurantCard)                             //  Component  ===>  "Higher Order Component"       H O C

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#")

        const json = await data.json()

        // The ? is used for optional chaining
        setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFiltered(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        console.log("JSON = ",json)
    }
    
    // console.log("Body Rendered",filtered)


    // const filterFunction = () => {
    //     console.log("Restaurant List:-")
    //     const filteredRes = list.filter((restaurant) => {
    //         console.log(restaurant.info.name)
    //         return restaurant.info.name.toLowerCase().includes(searchText)
    //     })
    //     console.log("SearchText = ", searchText)
    //     setFiltered(filteredRes)
    // }




    const onlineStatus = useOnlineStatus();             // Online Status
    console.log("OnlineStatus : ", onlineStatus)

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are OFFLINE</h1>
        )
    }

    console.log("list second time = ",list)             // list undefined

    return list.length === 0 ?
        (<ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />)

        :

        (
            <div className="body dark:bg-blue-950">

                <div className="filter flex justify-center bg-white">

                    <div className="search flex w-screen justify-center align-middle p-4 dark:bg-blue-950">

                        <input className='border flex align-middle justify-center h-9 w-[500] m-4 px-3 py-6 rounded-md border-gray-300 border-solid shadow-xl dark:bg-slate-800 text-slate-300' type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value); }} />

                        {/* FILTER by search */}

                        <button className='px-4 py-2 bg-blue-400 m-4 rounded-md shadow-xl text-white dark:bg-sky-800' onClick={() => filterFunction()}>Search</button>
                    </div>

                </div>


                {/* Context API practice =========== input box of Body.jsx */}

                <div>
                    UserName : <input className='border' type="text" placeholder={data.loggedInUser} onChange={(e)=>data.setName(e.target.value)}/>
                </div>


                {console.log("Filtered = ", filtered)}

                <div className="flex flex-wrap mx-auto w-screen justify-center align-middle gap-6">
                    {
                        filtered.map((restaurant) =>(
                            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} > 
                                { restaurant.info.id%2===0? <RestaurantCardEvenId resData={restaurant} /> : <RestaurantCard resData={restaurant}/>}
                            </Link>
                            // This Link is pointing to <RestautantMenu/>
                        ))
                    }
                </div>


                    <br className='w-1'/>


        {/* Footer */}

                <div className='footer flex items-center justify-center flex-col pb-5'>

                    <ul className='flex justify-between m-4 '>
                        <li className='px-4 text-gray-400'><Link to="/about">About us</Link></li>
                        <li className='px-4 text-gray-400'><Link to="/about">|</Link></li>
                        <li className='px-4 text-gray-400'><Link to="/about">Career</Link></li>
                        <li className='px-4 text-gray-400'><Link to="/about">|</Link></li>
                        <li className='px-4 text-gray-400'><Link to='/about'>Terms</Link></li>
                        <li className='px-4 text-gray-400'><Link to="/about">|</Link></li>
                        <li className='px-4 text-gray-400'><Link to='/about'>Donate Us</Link></li>
                    </ul>

                    <p className=' text-gray-400'>Copyright © Arkaprabha Das</p>
                </div>

            </div>

        )
}

export default Body