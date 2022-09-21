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
        <div className="card">
           {displayMakeup}
        </div>
    )
}

export default MakeupContainer;