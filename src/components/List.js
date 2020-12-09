import React,{Fragment} from "react";
import ListItem from "./ListItem.js"
// import Button from "./Button"


//component to return a list of launches
const List=({launchData})=>{

  const myList=[...launchData].map((item)=>{
    return(
    <p>howdy{item.details}</p>
  )
  })



  console.log(launchData)








  return(
    <Fragment>
    <div className="listContainer">
    {myList}



    </div>


    </Fragment>
  )

}
export default List
