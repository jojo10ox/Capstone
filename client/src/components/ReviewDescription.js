
import EditReview from "./EditReview";

function ReviewDescription({  makeupReviews, userReviews, makeupUser,currentUser, makeup, change, setChange, handleDelete}) {

   const reviewsDisplayed = makeupReviews.map((makeupReview)=> {
        return(
            <div key={makeupReview.id} className="border">
                <div className="flex justify-between">
                    <h1><b>{makeupReview.description_title}</b></h1>
                    <h1 className="text-sm"><i>{makeupReview.state}</i></h1>

                </div>
             
                <h1><em>{makeupReview.rating}/10</em></h1>
                <h1>{makeupReview.review_description}</h1>
               
              

           
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