import React from 'react'

const ContactUs = ()=>{
    return(
        <div>
            <h1 className='font-bold text-4xl m-3 p-3'>Contact Us</h1>
            <form action="" className=''>

                <input type="text" placeholder='Name' className='w-10 border border-gray-400 mx-6'/>

                <input type="text" placeholder='Email' className='w-10 border border-gray-400 mx-6'/>

                <textarea className='border border-gray-400 h-16 m-3' placeholder='Write here...' name="" id=""></textarea>

                <button className='bg-blue-300 p-3 rounded-lg'>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs