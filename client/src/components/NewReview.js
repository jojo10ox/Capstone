import { useEffect, useState } from "react";

function NewReview({addReview, currentUserId, makeupId, makeup}){
//  console.log(reviews)
    const[formData, setFormData] = useState({
        // rating: "",
        // description_title: "",
        // description: "",
        // state: "",
    })
    const[errors, setErrors] = useState([])

    function handleChange(e){ setFormData({...formData, [e.target.id] : e.target.value }) }


   

    function handleSubmit(e){
        e.preventDefault()
        e.target.reset()

        // const newReview = {
        //     makeup_id: makeupId,
        //     user_id: currentUserId,
        //     rating: formData.rating,
        //     description_title: formData.description_title,
        //     description: formData.description,
        //     state: formData.state
        // }
        const infoToSend = {
            ...formData,
            ...makeup
        }
       
       
        fetch('/reviews',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(infoToSend)
        })
        .then(res => {
          if(res.ok){
            // res.json().then((review)=>setReviews([...reviews, review]))
            res.json().then(addReview)
            // ((reviewss) => addReview(reviewss))
          } else {
            //Display errors
            res.json().then((json) => setErrors(json.errors));
          }
        })
      }

   
    // console.log(formData)

    return(
        <div>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description_title">
                        Description Title
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="description_title" type="text" placeholder="Please enter a title." onChange={handleChange}/>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                        Description
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="Please enter a description."  onChange={handleChange}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rating">
                            Rating
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="rating" type="number" placeholder=""  onChange={handleChange}/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state" >
                            State
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state" type="text" placeholder="Texas"  onChange={handleChange}/>
                    </div>
                    <button>submit</button>
                </div>
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>

    )
}

export default NewReview;