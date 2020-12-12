import React,{Fragment} from "react";
import ListItem from "./ListItem.js"
// import Button from "./Button"


//component to return a list of launches
const List=({launchData,sortedData})=>{

  const flightData=sortedData?sortedData:launchData

  const myList=[...flightData].map((launch)=>{
    return(
    <ListItem launch={launch}/>
  )
  })




  return(
    <Fragment>
    <div className="list-container-wrapper">
    <div className="list-container">
    {myList}
    </div>
    </div>
    </Fragment>
  )

}
export default List
