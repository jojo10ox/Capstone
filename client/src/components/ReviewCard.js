
import { useState } from "react";


function ReviewCard({review}){
    // console.log(review)
    const [showReview, setShowReview] = useState(false)  
    
    function handleShowReview(){
        setShowReview(true)
    }
    return(
        <div >
           
         {/* <button onClick={handleShowReview}>{showReview?  <EditReviews review={review}/>: "Edit Review"}</button> */}
         <h1>rating: {review.rating}</h1>
         <h1>description title: {review.description_title}</h1>
         <h1>description:{ review.description}</h1>
         <h1>state: {review.state}</h1>
        </div>
    )
}

export default ReviewCard;