import React from 'react';
import { useContext } from 'react';
import CartContext from '../utils/CartContext';

const Cart = ()=>{

    const data = useContext(CartContext)
    console.log(data)
    const arr = data.cartList

    return(
        <>
            <h1 className='font-bold text-2xl'>Cart</h1>
            {
                arr.map((item)=>{
                    return(
                        <h1>
                            {item}
                        </h1>
                    )
                })
            }
        </>
    )
}

export default Cart