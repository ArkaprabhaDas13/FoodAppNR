import React from 'react';
import { useContext } from 'react';
import CartContext from '../utils/CartContext';
import cartSlice from '../utils/cartSlice';
import {useSelector} from 'react-redux'
import ItemList from './ItemList';
import {useDispatch} from 'react-redux'
import { clearCart } from '../utils/cartSlice';

const Cart = ()=>{

    // const data = useContext(CartContext)
    // console.log(data)
    // const arr = data.cartList

    const cartData = useSelector((store) => store.cart.items)
    console.log("cart data = ",cartData)


    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart())                       // CLEAR CART
    }


    return(
        <div className='text-center'>
            <h1 className='font-bold m-3 py-3 text-2xl'>Cart</h1>

            <ItemList items={cartData}/>

            {
                cartData.length === 0 ? <h1>No items present in Cart :(</h1> : <button className='border bg-red-400 text-white p-3 rounded-lg' onClick={handleClearCart}>Clear Cart</button>
            }
            

            {/* {
                arr.map((item)=>{
                    return(
                        <h1>
                            {item}
                        </h1>
                    )
                })
            } */}
        </div>
    )
}

export default Cart