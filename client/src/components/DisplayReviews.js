import ReviewCard from "./ReviewCard";




function DisplayReviews({reviews, handleEdit, change, setChange,handleDelete, currentUser, editContactId, handleEditClick, onUpdateReview, handleCancelClick, savedMakeup, deleteReview}){

console.log(savedMakeup)
  
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
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-y-5 gap-x-9 p-4">
            {displayReview}
        </div>
    )
}

export default DisplayReviews;