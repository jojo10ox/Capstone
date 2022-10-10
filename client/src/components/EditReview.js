import { useState } from "react"

function EditReview({makeupReview, deleteReview, handlePatch, makeupUser,rev, userReviews, makeup, currentUser, change, setChange}){


    const {star, description_title, review_description, state } = makeupReview
    const [ratingUpdate, setRatingUpdate] = useState(star)
    const [descriptionTitleUpdate, setdescriptionTitleUpdate] = useState(description_title)
    const [descriptionUpdate, setdescriptionUpdate] = useState(review_description)
    const [stateUpdate, setStateUpdate] = useState(state)
    const [showReview, setShowReview] = useState(false) 
    const [errors, setErrors] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [reviews, setReviews] = useState([])



    const handleReviews = () => {
        setShowReview(showReview => !showReview)
    }
    function updateReview(e){
        e.preventDefault()
       

        const formData = {
            makeup_id: makeup.id,
            user_id: currentUser.id,
            star: ratingUpdate,
            description_title: descriptionTitleUpdate,
            review_description: descriptionUpdate,
            state: stateUpdate
        };

        // console.log(formData)

        fetch(`/reviews/${makeupReview.id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then((resp) => resp.json())
        .then(review => {
             handlePatch(review, review.makeup.id)
        })

        // .then((res) => {
        //     if (res.ok) {
        //         res.json().then(setChange(!change))
        //     } else {
        //         res.json().then((errors) => setErrors(errors.errors));
        //     }
        // });
    }

    function handleDelete() {
        fetch(`/reviews/${makeupReview.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(review => {
        // console.log(review.makeup.id) 
         
        deleteReview(review, review.makeup.id)
        });
    }

// console.log(makeupReview)
        
        // .then((res) => {
        //     if (res.ok) {
        //         setChange(!change); // passed down from App
        //     } else {
        //         res.json().then((json) => setErrors(json.errors));
        //     }
        // });
   

   
// const test= userReviews.map((u, i)=>{
//    return(
//     <div key={i}>
//         {currentUser.id === u.user.id? <svg  onClick={handleReviews} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
//                         </svg>  
//                     : null }
//         {console.log(u.user.id)}
//         {console.log(currentUser.id)}
//     </div>
//    )
// })

// const testingAgain = test.map((t)=> {
//     return(
//         <div>
//             {console.log(t)}
//         </div>
//     )
// })

//    const userReviewsss = makeupUser.map((user,i)=> {
//         return(
//             <div key={i}>
//                 {/* {console.log(user.id)} */}
//                     {currentUser.id === user.id ?
//                         <svg  onClick={handleReviews} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
//                         </svg>  
//                     : null }

//                     {currentUser.id === user.id ?
//                         <svg  onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                         </svg>  
//                     : null}         
//             </div>
//         )
//     })
// console.log(makeupReview.id)
// currentUser.id === makeupReview.id?  

    return(
        <div>
            <div className="flex justify-between">
                {currentUser.id ?  <button className="w-8 h-6" onClick={handleReviews}>Edit</button> :null}
                {/* {test} */}
                {/* {currentUser.id ?  
                       <svg  onClick={handleReviews} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 object-right">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                       </svg>  
                 :null} */}
            
                {/* {currentUser.id ?  
                        // <svg  onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        // <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        // </svg> 
                :null}  */}
                {currentUser.id ?  
                    // <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    // <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    // </svg>
                    <button className="bg-neutral-500" onClick={handleDelete}>Delete</button>
                :null} 
               

                
                        
              {/* {userReviewsss} */}
            </div>
            <div>
 {showReview?  
                    <form className="bg-red-50 py-4 px-6 shadow rounded-lg sm:px-10 space-y-2">
                        <h1 className="tracking-wide text-black text-lg underline font-bold mb-5" >Edit Review</h1>
                        <div className="">
                            <h1><strong>Description Title</strong></h1>
                                <div>
                                    <input className="text-black border rounded-md"
                                    id="description_title" 
                                    type="text"
                                    placeholder="Please enter a title."
                                    onChange={(e) => setdescriptionTitleUpdate(e.target.value)}
                                    value={descriptionTitleUpdate}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div>
                                <h1><strong>Rating</strong></h1>
                                <div>
                                    <input className="text-black border rounded-md "
                                    id="star"
                                    type="number"
                                    onChange={(e) => setRatingUpdate(e.target.value)}
                                    value={ratingUpdate}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div>
                                <h1><strong>Description</strong></h1>
                                <div>
                                    <input className="text-black border h-20 rounded-md "
                                    id="description"
                                    type="text" 
                                    placeholder="Please enter a description."
                                    onChange={(e) => setdescriptionUpdate(e.target.value)}
                                    value={descriptionUpdate}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div>
                                <h1><strong>State</strong></h1>
                                <div>
                                    <input className="text-black border rounded-md "
                                    id="state"
                                    type="text" 
                                    placeholder="Texas"
                                    onChange={(e) => setStateUpdate(e.target.value)}
                                    value={stateUpdate}
                                    >
                                    </input>
                                </div>
                            </div>
                                <button className="w-20" onClick={updateReview}>save</button> 
                            </form> 
                        : null } 
                            {/* <button onClick={handleCancelClick}>cancel</button> */} 
             </div>
        </div>
    )
}

export default EditReview;