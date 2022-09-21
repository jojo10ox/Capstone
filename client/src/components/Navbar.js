import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import {MenuIcon} from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function Navbar(){

const [isOpen, setIsOpen] = useState(false)


    return(
        <div className='w-screen h-[80px] z-10 sticky top-0  bg-zinc-200 drop-shadow-lg '>
                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div className='flex items-center'>
                        <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>DoseOfBeauty</h1>
                        <ul className='hidden md:flex'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/makeup">Makeup</NavLink></li>
                        </ul>
                    </div>
                    
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4"><NavLink to="/login">Sign In</NavLink></button>
                    <button className="px-8 py-3"><NavLink to="/signup">Sign Up</NavLink></button>
                </div>     
            </div>
        </div>
    

    )
}




export default Navbar;