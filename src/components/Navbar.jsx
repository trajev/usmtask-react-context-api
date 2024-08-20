import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-[10vh] bg-amber-100 flex justify-between shadow-xl cursor-pointer z-10 sticky top-0 left-0' >

            <Link to="/" className='flex'>

                <div className='flex h-full items-center '>
                    <img src="https://imgs.search.brave.com/hew_R-jp8afWoq_W5Cn8VqLZ3ZDZyDLt8NWgRFxoa0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ29hdC9zbWFs/bC9nb2F0X1BORzEz/MTU3LnBuZw" alt="logo" className='object-cover h-full' />
                </div>

                <div className='flex flex-col items-center h-full text-zinc-700 '>
                        <h2 className='font-sans font-semibold text-4xl italic h-[70%]'>BAKRI BAZAAR</h2>
                    <div className='flex gap-1 font-medium italic text-md h-[30%] mb-1 w-full justify-end items-center'>
                        <p>Shopping</p>
                        <p>App</p>
                    </div>

                </div>
            </Link>

            <ul className='flex items-center gap-10 px-10 font-sans'>
                <Link to="/" className='font-medium text-xl cursor-pointer hover:text-amber-600 '>Home</Link>
                <li className='font-medium text-xl cursor-pointer hover:text-amber-600 '>Categories</li>
                <li className='font-medium text-xl cursor-pointer hover:text-amber-600 '>About Us</li>
            </ul>

        </div>
    )
}

export default Navbar