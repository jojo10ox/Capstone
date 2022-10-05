
import EditReview from "./EditReview";

function ReviewDescription({  makeupReviews, handlePatch,  deleteReview, userReviews, makeupUser,currentUser, makeup, change, setChange}) {

   const reviewsDisplayed = makeupReviews?.map((makeupReview)=> {

    // console.log(makeupReview)
        return(
            <div key={makeupReview.id} className="py-4 rounded-md">
                <div className="flex justify-between ">
                    <h1><b>{makeupReview.description_title}</b></h1>
                    <h1 className="text-sm"><i>{makeupReview.state}</i></h1>

                </div>
             
                <h1><em>{makeupReview.star}/10</em></h1>
                <h1>{makeupReview.review_description}</h1>
               
              

           
                <EditReview
                  
                    deleteReview={deleteReview}
                    makeupReview={makeupReview}
                    makeup={makeup}
                    currentUser={currentUser}
                    change={change}
                    setChange={setChange}
                    makeupUser={makeupUser}
                    userReviews={userReviews}
                    handlePatch={handlePatch}
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