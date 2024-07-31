import React from 'react'

export default ItemList = ({items})=>{

    return(
        <div className=''>
            <h1>
                {items.map((i)=>
                    <div className='flex justify-between mx-5 my-2 border-b-2 border-gray-200 ' key={i.card.info.id}>                       
                        <div className='flex mb-2'>
                            <p className='p-1 m-2 text-gray-500'>{i.card.info.name}  - </p>
                            <p className='text-gray-700 font-bold p-1 m-2'>Rs {i.card.info.price/100}</p>
                        </div>

                        <button className='bg-green-50  border border-green-500 w-10 h-10 mt-1 rounded-xl font-extrabold hover:bg-green-500'>Add  +</button>
                    </div>

                )}
            </h1>
        </div>
    )

}