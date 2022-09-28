
import EditReview from "./EditReview";

function ReviewDescription({  makeupReviews, userReviews, makeupUser,currentUser, makeup, change, setChange, handleDelete}) {
// console.log(userReviews)

   const reviewsDisplayed = makeupReviews.map((makeupReview)=> {
        return(
            <div key={makeupReview.id} >
                <h1>description title: {makeupReview.description_title}</h1>
                <h1>description: {makeupReview.review_description}</h1>
                <h1>state: {makeupReview.state}</h1>
                <h1>rating: {makeupReview.rating} </h1>

           
                <EditReview
                    makeupReview={makeupReview}
                    makeup={makeup}
                    currentUser={currentUser}
                    change={change}
                    setChange={setChange}
                    handleDelete={handleDelete}
                    makeupUser={makeupUser}
                    userReviews={userReviews}
                />   
            </div>
        )
    })

    return(
        <div>
            {reviewsDisplayed}
        </div>
    )
}

export default ReviewDescription;