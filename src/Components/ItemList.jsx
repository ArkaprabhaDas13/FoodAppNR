import React from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../utils/cartSlice'

export default ItemList = ({items})=>{

    const dispatch = useDispatch();

    const handleAddItem = (itemName)=>{
        // Dispatch an action

        dispatch(addItem(itemName))
    }

    return(
        <div className=''>
            <h1>
                {items.map((i)=>
                    <div className='flex justify-between mx-5 my-2 border-b-2 border-gray-200 ' key={i.card.info.id}>                       
                        <div className='flex flex-col'>
                            <div className='flex mb-2'>
                                <p className='p-1 m-2 font-bold text-gray-700'>{i.card.info.name}  - </p>
                                <p className='text-gray-700 font-bold p-1 m-2'>Rs {i.card.info.price/100}</p>
                            </div>
                            <p className='m-3 flex text-gray-500 w-80'>{i.card.info.description}</p>
                        </div>
                        <button className='bg-green-50  border border-green-500 w-10 h-10 mt-1 rounded-xl font-extrabold hover:bg-green-500' onClick={()=>handleAddItem(i)}>Add  +</button>
                    </div>

                )}
            </h1>
        </div>
    )

}