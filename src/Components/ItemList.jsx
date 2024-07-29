import React from 'react'

export default ItemList = ({items})=>{

    return(
        <div className=''>
            <h1>
                {items.map((i)=>
                    <div className='flex justify-between mx-5' key={i.card.info.id}>
                        <p className='p-1 m-2 text-gray-500'>{i.card.info.name}</p>
                        <p className='text-gray-700 font-bold'>Rs {i.card.info.price/100}</p>
                    </div>

                )}
            </h1>
        </div>
    )

}