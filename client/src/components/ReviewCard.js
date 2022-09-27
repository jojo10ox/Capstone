
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";




function ReviewCard({review, currentUser, handleDelete, change, setChange, makeup, editContactId, handleEditClick, onUpdateReview, handleCancelClick, handleEdit, deleteReview}){
//    console.log(review)


    const {rating, description_title, review_description, state } = review
    const [ratingUpdate, setRatingUpdate] = useState(rating)
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
// console.log(review)

  
        function updateReview(e){
            e.preventDefault()
           

            const formData = {
                makeup_id: review.makeup.id,
                user_id: currentUser.id,
                rating: ratingUpdate,
                description_title: descriptionTitleUpdate,
                review_description: descriptionUpdate,
                state: stateUpdate
            };

            console.log(formData)

            fetch(`/reviews/${review.id}`, {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(formData),
            }).then((res) => {
                if (res.ok) {
                    res.json().then(setChange(!change))
                } else {
                    res.json().then((errors) => setErrors(errors.errors));
                }
            });

            // return review
        }
    
        {/* editContactId === currentUser.id */}
        // onClick={(e)=> handleEditClick(e, currentUser)}


        function handleDelete() {
			fetch(`/reviews/${review.id}`, {
				method: "DELETE",
			}).then((res) => {
				if (res.ok) {
					setChange(!change); // passed down from App
				} else {
					res.json().then((json) => setErrors(json.errors));
				}
			});
		}
   
    return(
        
        <div className="card">
            
  
                <div>
                    <div>
                        <h1 className="product-title">{review.makeup.name}</h1>
                        <h3 className="product-description">{review.makeup.brand}</h3>
                        <img src={review.makeup.api_featured_image} alt="makeup"></img>
                        {/* edit button */}
                        {currentUser.id === review.user.id ?  <svg  onClick={handleReviews} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg> : null}
                        {/* delete button */}
                        {currentUser.id === review.user.id ?
                        <svg  onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg> : null}
                    </div>
              

                    {/* <button onClick={handleShowReview}>{showReview?  <EditReviews review={review}/>: "Edit Review"}</button> */}
                     <div>
                        <h1>rating: {review.rating}</h1>
                        <h1>description title: {review.description_title}</h1>
                        <h1>description:{ review.description}</h1>
                        <h1>state: {review.state}</h1>
                    </div> 
             </div>


          
         
            {showReview? 
                <div>
                <form>
                    <div>
                        <input
                        id="rating"
                        type="number"
                        onChange={(e) => setRatingUpdate(e.target.value)}
                        value={ratingUpdate}

                      >
                        </input>
                    </div>
                    <div>
                        <input
                        id="description_title" 
                        type="text"
                        placeholder="Please enter a title."
                        onChange={(e) => setdescriptionTitleUpdate(e.target.value)}
                        value={descriptionTitleUpdate}
                        >
                        </input>
                    </div>
                    <div>
                        <input
                        id="description"
                        type="text" 
                        placeholder="Please enter a description."
                        onChange={(e) => setdescriptionUpdate(e.target.value)}
                        value={descriptionUpdate}
                        >
                        </input>
                    </div>
                    <div>
                        <input
                        id="state"
                        type="text" 
                        placeholder="Texas"
                        onChange={(e) => setStateUpdate(e.target.value)}
                        value={stateUpdate}
                        >
                        </input>
                        <button onClick={updateReview}>save</button>
                      </div>
                </form>
                {/* <button onClick={handleCancelClick}>cancel</button> */}
               
            </div> : null }
            
          
             {errors ? <div>{errors}</div> : null}
        </div>
    )
}

export default ReviewCard;