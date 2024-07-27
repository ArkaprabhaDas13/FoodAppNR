import React, { useEffect } from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import logo from '../utils/logo.png'

const Header = () => {

  const [theme, setTheme] = useState('Light')

  const[btn, setBtn] = useState("Login")

  const onlineStatus = useOnlineStatus();

  const handleTheme = ()=>{
    setTheme(theme==="Dark"?"Light":"Dark")
    console.log({theme})
  }

  
  useEffect(()=>{
    console.log("rendered again !!!")

    // Here the theme is written in useEffect because only when the button is clicked, we want the change to occur
    if(theme === "Dark")
      {
        document.documentElement.classList.add("dark")
      }
      else{
        document.documentElement.classList.remove("dark")
      }
  }, [btn, theme])



  return (
    <div className='flex vw-100 justify-between bg-yellow-100 lg:bg-blue-100 dark:bg-sky-900 shadow-xl px-4'>
        <div className='logo-container'>
            <Link to='/'>
              <img className='w-14 m-4' src={logo}/>
            </Link>
        </div>

        <div className='flex items-center'>
            <ul className='flex justify-between p-4 m-4 '>

                <li className='bg-blue-300 px-2 pb-1 rounded-md dark:bg-sky-600'><button onClick={handleTheme} className='font-bold text-xs dark:text-gray-200 ' >{theme} Theme</button></li>

                <li className='px-4 dark:text-gray-300'>{onlineStatus?'Online 🟢':'Offline 🔴'}</li>
                <li className='px-4 dark:text-gray-300'><Link to="/">Home</Link></li>
                <li className='px-4 dark:text-gray-300'><Link to="/about">About Us</Link></li>
                <li className='px-4 dark:text-gray-300'>Contact Us</li>
                <li className='px-4 dark:text-gray-300'><Link to='/groccery'>Groccery</Link></li>
                <li className='px-4 dark:text-gray-300'>CART</li>
                <button className='login text-blue-400 font-extrabold mx-3'
                onClick={() => {btn==='Login'?setBtn('Logout'):setBtn('Login')}}
                >{btn}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header