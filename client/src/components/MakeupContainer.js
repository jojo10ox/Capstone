import MakeupCard from "./MakeupCard";

function MakeupContainer({makeups}){

const displayMakeup = makeups.map((makeup)=>{
    return(
        <MakeupCard
        key={makeup.id}
        makeup={makeup}
        />
    )

})
    return(
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-y-5 gap-x-9 p-4 ">
           {displayMakeup}
        </div>
    )
}

export default MakeupContainer;