import { Link } from "react-router-dom";
import NewReview from "./NewReview";
import SpecificItem from "./SpecificItem";
function MakeupCard({makeup}){

    console.log(makeup.id)
    return(
        <div>
            <div className="card p-4 text-sm">
                <Link className="product-title" to={`/makeup/${makeup.id}`}>{makeup.name}</Link>
                <h3 className="product-description">{makeup.brand}</h3>
                <Link to={`/makeup/${makeup.id}`}><img src={makeup.api_featured_image} alt='Makeup' className="w-full sm:h-48 object-cover"/></Link>
                {/* <NewReview makeupId={makeup.id}/> */}
                {/* {makeup.description} */}
                {makeup.price==="0.0"? (null):(makeup.price)}
                {/* ${makeup.price} */}
                {/* {makeup.product_colors} */}
               
            </div>
        </div>
    )
}
export default MakeupCard;