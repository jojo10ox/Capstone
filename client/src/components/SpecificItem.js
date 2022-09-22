import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayReviews from "./DisplayReviews";

function SpecificItem(){
    //  console.log(makeups)
    let {id} = useParams();

    const[makeupItem, setMakeUpItem] = useState([])     
     
    useEffect(() => {
		fetch(`/makeups/${id}`)
			.then((res) => res.json())
			.then((makeupItem) => {
				setMakeUpItem(makeupItem);
			});
	}, [id]);
  
   
    return(
        <div className="grid md:grid-cols-2 p-4">
            <img className=" object-scale-down w-96 " src={makeupItem.image} alt="makeup"></img>
            <div className="  "> 
                {makeupItem.brand}
                <h2 className="product-title">{makeupItem.name}</h2>
                <h3>{makeupItem.description}</h3>
                {makeupItem.price===0? (null):(makeupItem.price)}
                {/* {makeupItem.product_colors} */}

            </div>
        </div>
    )
}

export default SpecificItem;