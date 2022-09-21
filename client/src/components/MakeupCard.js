function MakeupCard({makeup}){
    console.log(makeup)
    return(
        <div>
            <div className= "">
                {makeup.name}
                <img src={makeup.image} alt='Makeup Item' className="w-full h-full object-cover"/>
                {makeup.product_type}
                {makeup.brand}
                {makeup.description}
                ${makeup.price}
                {/* {makeup.product_colors} */}
            </div>
        </div>
    )
}
export default MakeupCard;