import { NavLink } from "react-router-dom";

function Navbar({currentUser, setCurrentUser}){

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(null)
              }
            })
      }
      


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
                        <div className="inline-flex overflow-hidden relative justify-center items-center w-15 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                 </div>
                    
                <div className="flex pr-4 md:justify-end">
                    <button className="border-none bg-transparent text-black mr-4"><NavLink to="/login">Sign In</NavLink></button>
                    <button className="px-8 py-3"><NavLink to="/signup">Sign Up</NavLink></button>
                    {currentUser? <button onClick={handleLogout} className="border-none bg-transparent text-black mr-4 px-4">Logout</button> : null}
                </div>  
               {currentUser?  
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{currentUser.username}</span>
   
                </div> : null}
                
            </div>
        </div>
    )
}

export default Navbar;