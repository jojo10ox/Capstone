import ReviewDescription from "./ReviewDescription";

 
function DisplayReviews({reviews, change, handlePatch,  setChange, currentUser, savedMakeup, addReview, deleteReview}){

    const displayReview = savedMakeup?.map((makeup)=>{
       return(
           <div key={makeup.id}>
               <h1 className="product-title">{makeup.name}</h1>
               <h1 className="product-description">{makeup.brand}</h1>
               <img src={makeup.api_featured_image} alt="makeup"></img>

                <ReviewDescription
                    makeupReviews={makeup.reviews}
                    makeupUser={makeup.users}
                    currentUser={currentUser}
                    savedMakeup={savedMakeup}
                    makeup={makeup}
                    change={change}
                    setChange={setChange}
                    userReviews={reviews}
                    deleteReview={deleteReview}
                    handlePatch={handlePatch}
             
                  
               /> 
           </div>
             
       )})
 
   
   return(
       <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-y-5 gap-x-9 p-4">
           {displayReview}
       </div>
   )
}
 
export default DisplayReviews;
