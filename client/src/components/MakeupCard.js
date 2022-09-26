import { Link, createSearchParams, useNavigate } from "react-router-dom";
import SpecificItem from "./SpecificItem";
import { useSearchParams } from "react-router-dom";



function MakeupCard({makeup, setSendMakeup}){
  
    // console.log(makeup)

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
                {/* <Link className="product-title" to={`/makeup/${makeup.id}`}>{makeup.name}</Link> */}
                <h1 className="product-title">{makeup.name}</h1>
                <h3 className="product-description">{makeup.brand}</h3>
                <img src={makeup.api_featured_image} alt='Makeup' className="w-full sm:h-48 object-cover"></img> 
                {/* <Link to={`/makeup/${makeup.id}`}><img src={makeup.api_featured_image} alt='Makeup' className="w-full sm:h-48 object-cover"/></Link> */}
              
             
                {/* {makeup.description} */}
                <h1>{makeup.price==="0.0"? (null):(makeup.price)}</h1>
                <Link to={"/review/new"} onClick={onReviewClick}>Write a Review</Link>
                {/* ${makeup.price} */}
                {/* {makeup.product_colors} */}
               
            </div>
        </div>
    )
}
export default MakeupCard;