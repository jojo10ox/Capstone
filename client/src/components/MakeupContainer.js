import MakeupCard from "./MakeupCard";


function MakeupContainer({makeupsApi, setSendMakeup, currentUser, setSearch}){
//  console.log(makeups)

const onSearch = (e) => {
    setSearch(e.target.value)
}
const limitedMakeup = makeupsApi.slice(0,100)

const displayMakeup = limitedMakeup.map((makeup)=>{
    return(
        <MakeupCard
        key={makeup.id}
        makeup={makeup}
        setSendMakeup={setSendMakeup}
        currentUser={currentUser}
        />
    )

})
    return(
        <div>
            <div className="flex">
                <div>     
                    <div className="p-4">
                        <div className="mb-3 xl:w-96">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                            <input onChange={onSearch} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                            <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className="p-4"  id="filter-by-select">
                        <select>
                        <option value="">Filter By</option>
                        <option value="all">View All</option>
                        <option value="brand">Brand</option>
                        <option value="name">Name</option>
                        <option value="category">Category</option>
                        <option value="product_type">Product Type</option>
                        </select>
                    </div>
                </div> */}
            </div>    
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-y-5 gap-x-9 p-4 ">
                {displayMakeup}
            </div>
           

        </div>
       
    )
}

export default MakeupContainer;