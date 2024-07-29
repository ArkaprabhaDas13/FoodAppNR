import React from 'react'

export default ItemList = ({items})=>{

    return(
        <div className=''>
            <h1>
                {items.map((i)=>
                    <div className='flex justify-between mx-5 my-2 border-b-2 border-gray-200 ' key={i.card.info.id}>                       
                        <div className='mb-2'>
                            <p className='p-1 m-2 text-gray-500'>{i.card.info.name}</p>
                            <p className='text-gray-700 font-bold'>Rs {i.card.info.price/100}</p>
                        </div>

                        <button className=' border border-green-500 w-10 h-16 mt-1 rounded-xl font-extrabold hover:bg-green-500'>Add  +</button>
                    </div>

                )}
            </h1>
        </div>
    )

}