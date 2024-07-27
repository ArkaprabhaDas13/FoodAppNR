import React from 'react'
import { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'
import About from './Components/About'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Error from './Components/Error'
import RestaurantCard from './Components/RestaurantCard'
import RestaurantMenu from './Components/RestaurantMenu'
// import Groccery from './Components/Groccery'             //This Groccery Component will be lazy loaded !
// LAZY LOADING...
const Groccery = lazy(() => (import('./Components/Groccery')))


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
            {/* Outlet is the inbuilt Component which gets replaced with all the Children components */}
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
            }
        ],
        errorElement: <Error />,
    }
])

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById('root'));          // create a Root to render in the index.html

root.render(<RouterProvider router={appRouter} />)