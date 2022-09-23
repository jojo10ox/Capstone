import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ReviewCard from "./ReviewCard";
import NewReview from "./NewReview";
import { useSearchParams } from "react-router-dom";



function DisplayReviews({addReview}){
    
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("id"))

    let {id} = useParams();

    const[reviews, setReviews] = useState({reviews: []})
  
     
    useEffect(() => {
		fetch(`/makeups/${id}`)
			.then((res) => res.json())
			.then((data) => {
                // console.log(data)
				setReviews(data);
			});
	}, [id]);

    // console.log(reviews)
  
    const displayReview = reviews.reviews.map((review)=>{
        return(
            <ReviewCard
            key={review.id}
            review={review}
            />
       
            
        )})
    return(
        <div>
            {/* <Link to="/review"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">
               Write a Review
            </button></Link> */}
            <div>
            {/* <NewReview makeupId={reviews.makeup_id} currentUserId={reviews.user_id} addReview={addReview}/> */}
            </div>
          
         
            {displayReview}
        </div>
    )
}

export default DisplayReviews;