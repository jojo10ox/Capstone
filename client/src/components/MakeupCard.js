import { useState } from "react";
import { Link } from "react-router-dom";


function MakeupCard({makeup, setSendMakeup, currentUser}){
  
    const [showDescription, setShowDescription] = useState(false)
    // console.log(makeup)
   
    const toggleDescription = () => {
        setShowDescription(showDescription => !showDescription)
    }
    function onReviewClick() {
        setSendMakeup(makeup)
        }

    // const [searchparams] = useSearchParams();
    // console.log(searchparams.get("id"))


    // const navigate = useNavigate()
    // const openReview = (id) => {
    //     navigate({ 
    //         pathname:"/review/new",
    //         search: createSearchParams({
    //             id: makeup
    //         }).toString()
    //     })
    // };
   

    // console.log(makeup)
    return(
        <div>
            <div className="card p-4 text-sm">
                <h1 className="product-title">{makeup.name}</h1>
                <h3 className="product-description">{makeup.brand}</h3>
                <img src={makeup.api_featured_image} alt='Makeup' className="w-full sm:h-48 object-cover" onClick={toggleDescription}></img> 
                <h1>{makeup.price==="0.0"? (null): <>${makeup.price}</> }</h1>
             
                {showDescription? <h1 className="">{makeup.description}</h1> : null}
                {currentUser?  <Link to={"/review/new"} onClick={onReviewClick} className="text-white border  bg-rose-500
    hover:bg-transparent hover:text-rose-600 rounded-md">Write a Review</Link> : "Please sign in to write a review." }
            </div>
        </div>
    )
}
export default MakeupCard;