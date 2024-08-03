import React, { useEffect, useState } from 'react'
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'
import About from './Components/About'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Error from './Components/Error'
import RestaurantMenu from './Components/RestaurantMenu'
import UserContext from './utils/UserContext'
// import Cart from './Components/Cart'
// import CartContext from './utils/CartContext'


// import Groccery from './Components/Groccery'             //This Groccery Component will be lazy loaded !
// LAZY LOADING...
const Groccery = lazy(() => (import('./Components/Groccery')))


const AppLayout = () => {
    
    const [name, setName] = useState()
    // const [cartList, setCartList] = useState(["fruits", "shoes", "ps5"])
    
    // const addToCart = (item)=>{
    //     setCartList((prevArray)=>[...prevArray, item])
    // }   


    useEffect(()=>{
    
        // User Authentication Logic
        const userData = {
            name: 'John Doe'
        }
        setName(userData.name)
    
    }, [])
    
    return (
        <div className='app'>
            {/* <CartContext.Provider value={{cartList, addToCart}}> */}
            
                <UserContext.Provider value={{loggedInUser:name, setName}}>
                    <Header />
                    <Outlet />
                    {/* Outlet is the inbuilt Component which gets replaced with all the Children components */}
                </UserContext.Provider>
            
            {/* </CartContext.Provider> */}
 v
        </div>
    )
}

const appRouter = createBrowserRouter([

    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: '/about',
                element: <About />,
                errorElement: <Error />
            },
            {
                path: '/contact',
                element: <ContactUs />,
                errorElement: <Error />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,

            },
            {
                path: '/groccery',
                element: <Suspense><Groccery/></Suspense>      // We have to pass JSX!!! inside fallback
            },
            // {
            //     path:'/cart',
            //     element:<Cart/>
            // }
        ],
        errorElement: <Error />,
    }
])

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");




const root = ReactDOM.createRoot(document.getElementById('root'));          // create a Root to render in the index.html
root.render(<RouterProvider router={appRouter} />)