import MakeupCard from "./MakeupCard";


function MakeupContainer({makeupsApi, setSendMakeup}){
//  console.log(makeups)



const displayMakeup = makeupsApi.map((makeup)=>{
    return(
        <MakeupCard
        key={makeup.id}
        makeup={makeup}
        setSendMakeup={setSendMakeup}
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