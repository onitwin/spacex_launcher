import React,{Fragment} from "react";
import ListItem from "./ListItem.js"
// import Button from "./Button"


//component to return a list of launches
const List=({launchData})=>{

  const myList=[...launchData].map((launch)=>{
    return(
    <ListItem launch={launch}/>
  )
  })



  console.log(launchData)








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
