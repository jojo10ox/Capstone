import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";



function DisplayReviews({reviews, handleEdit, change, setChange,handleDelete, currentUser, editContactId, handleEditClick, onUpdateReview, handleCancelClick, deleteReview}){


  
    const displayReview = reviews.map((review)=>{
        return(
            <ReviewCard
            key={review.id}
            review={review}
            currentUser={currentUser}
            editContactId={editContactId}
            handleEditClick={handleEditClick}
            onUpdateReview={onUpdateReview}
            handleCancelClick={handleCancelClick}
            deleteReview={deleteReview}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            change={change}
            setChange={setChange}
            />  
        )})
    return(
        <div>
            {displayReview}
        </div>
    )
}

export default DisplayReviews;