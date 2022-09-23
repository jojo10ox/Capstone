import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ReviewCard from "./ReviewCard";
import NewReview from "./NewReview";



function DisplayReviews(){


    let {id} = useParams();

    const[reviews, setReviews] = useState({reviews: []})
  
     
    useEffect(() => {
		fetch(`/makeups/${id}`)
			.then((res) => res.json())
			.then((data) => {
                console.log(data)
				setReviews(data);
			});
	}, [id]);

  
    const displayReviews = reviews.reviews.map((review)=>{
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
            <NewReview makeupId={reviews.makeup_id} currentUserId={reviews.user_id}/>
            </div>
          
         
            {displayReviews}
        </div>
    )
}

export default DisplayReviews;