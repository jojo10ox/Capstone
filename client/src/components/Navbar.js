import { NavLink, useNavigate } from "react-router-dom";


function Navbar({currentUser, setCurrentUser}){
    const history = useNavigate()

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser("")
                history("/")
              }
            })
      }
      


    return(
        <div>
            <div className='w-screen h-[80px] z-10 sticky top-0 md:bg-zinc-200 sm:bg-zinc-200 drop-shadow-lg '>
                    <div className='px-2 flex justify-between items-center w-full h-full'>
                        <div className='flex items-center'>
                            <NavLink to="/"><h1 className='text-3xl font-bold mr-4 sm:text-4xl'>DoseOfBeauty</h1></NavLink>
                            <ul className=' flex justify-center md:flex'>
                                <li><NavLink to="/reviews">Reviews</NavLink></li>
                            </ul>
                        </div>
                            <div className="inline-flex overflow-hidden relative justify-center items-center w-15 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    </div>
                    {currentUser?     
                        (<div className="flex pr-4 md:justify-end space-x-5 -space-y-1">
                               <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>
                                <button onClick={handleLogout} className="px-8 py-3">Logout</button> 
                        </div>)
                        :    
                    ( <div className="flex pr-4 md:justify-end">
                            <button className="border-none bg-transparent text-black mr-4"><NavLink to="/login">Sign In</NavLink></button> 
                        <button className="px-8 py-3"><NavLink to="/signup">Sign Up</NavLink></button>
                        </div>)  
                    }
                    </div>       
            </div>
        </div>
    )
}

export default Navbar;