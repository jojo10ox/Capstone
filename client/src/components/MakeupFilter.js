function MakeupFilter(){
    return(
        <div className="">
         <div id="filter-by-select">
            <select>
            <option value="">Filter By</option>
            <option value="all">View All</option>
            <option value="brand">Brand</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="product_type">Product Type</option>
            </select>
        </div>
        </div>
    )
}

export default MakeupFilter;