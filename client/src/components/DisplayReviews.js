import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NewReview from "./NewReview";

function DisplayReviews(){


    let {id} = useParams();

    const[reviews, setReviews] = useState({user: []})     
     
    useEffect(() => {
		fetch(`/reviews/${id}`)
			.then((res) => res.json())
			.then((reviews) => {
				setReviews(reviews);
			});
	}, [id]);
    //  console.log(reviews.user.username)
  
    return(
        <div>
            <Link to="/review"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">
               Write a Review
            </button></Link>
            <h1>REVIEWS</h1>
            <h2>review: {reviews.description}</h2>
            <h2>rating: {reviews.rating}</h2>
            <h2>location: {reviews.location}</h2>
            username: {reviews.user.username}
           
        </div>
    )
}

export default DisplayReviews;