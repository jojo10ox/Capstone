import { NavLink } from "react-router-dom";

function Navbar({currentUser}){
    return(
        <div className='w-screen h-[80px] z-10 sticky top-0 md:bg-zinc-200 sm:bg-zinc-200 drop-shadow-lg '>
                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div className='flex items-center'>
                        <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>DoseOfBeauty</h1>
                        <ul className=' flex justify-center md:flex'>
                            <li><NavLink to="/makeup">Makeup</NavLink></li>
                            <li><NavLink to="/reviews">Reviews</NavLink></li>
                        </ul>
                    </div>
                    
                <div className="flex pr-4 md:justify-end">
                    <button className="border-none bg-transparent text-black mr-4"><NavLink to="/login">Sign In</NavLink></button>
                    <button className="px-8 py-3"><NavLink to="/signup">Sign Up</NavLink></button>
                </div>   
            </div>
        </div>
    )
}

export default Navbar;