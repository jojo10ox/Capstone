import ReviewCard from "./ReviewCard"
import Test2 from "./Test2"

function Test({  makeupReviews, review, currentUser, makeup, change, setChange}) {

console.log(makeupReviews)
console.log(makeup)



   const reviewsDisplayed = makeupReviews.map((makeupReview)=> {
        return(
            <div>
                <h1>description title: {makeupReview.description_title}</h1>
                <h1>description: {makeupReview.review_description}</h1>
                <h1>state: {makeupReview.state}</h1>
                <h1>rating: {makeupReview.rating} </h1>
                <Test2
                makeupReview={makeupReview}
                makeup={makeup}
                currentUser={currentUser}
                change={change}
                setChange={setChange}
                
                />
                {/* {console.log(makeupReview)} */}




                
            </div>
            


        )
    })

  


    return(
        <div>
            {reviewsDisplayed}
     
      
            </div>
    )
}

export default Test;