import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewReview({addReview, handleFirstReview , change, setChange, sendMakeup, currentUser}){

    const[formData, setFormData] = useState({})
    const[errors, setErrors] = useState([])
    const history = useNavigate()

    function handleChange(e){ setFormData({...formData, [e.target.name]: e.target.name === "rating" ? parseInt(e.target.value): (e.target.value) }) }
   

    function handleSubmit(e){
        e.preventDefault()
       

        const infoToSend = {
            ...formData,
            ...sendMakeup
        }
       
       
        fetch('/first_review',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(infoToSend)
        })
        .then(res=>res.json())
        .then(review => {
            handleFirstReview(review)
            // console.log(review)
            // addReview(review, review.makeup.id)
        })
        // .then(res => {
        //   if(res.ok){
        //     res.json().then( setChange(!change), history("/"))
        //   } else {
        //     res.json().then((json) => setErrors(json.errors));
        //   }
        // })
        e.target.reset()
    }
// console.log(formData)

    return(
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md  grid place-items-center h-screen ">
            <form className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 " onSubmit={handleSubmit}> 
                <h1 className="block uppercase tracking-wide text-black text-s font-bold mb-5" >Write a Review</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description_title">
                        Description Title
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="description_title" type="text" placeholder="Please enter a title." required onChange={handleChange}/>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="review_description">
                        Description Review
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="review_description" type="text" placeholder="Please enter a description."  onChange={handleChange}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rating">
                        Rating
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="rating" type="number" placeholder="10" min="0" max="10" onChange={handleChange}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state" >
                        State
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="state" type="text" placeholder="Texas"  onChange={handleChange}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="state" >
                        Submit
                        </label>
                        <button className="block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">submit</button>
                    </div>
                    
                </div>
            </form> 
            {errors ? <div>{errors}</div> : null}
        </div>
        </div>

    )
}

export default NewReview;