import React,{Fragment} from "react";
import ListItem from "./ListItem.js"
import { v4 as uuidv4 } from 'uuid'; //generate unique ID for use as keys

//component to return a list of launches
const List=({launchData,sortedData})=>{

  const flightData=sortedData?sortedData:launchData

  const myList=[...flightData].map((launch)=>{
    return(
    <ListItem key={uuidv4()} launch={launch}/>
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
