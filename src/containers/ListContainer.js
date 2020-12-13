import React ,{Fragment} from 'react'
import List from "../components/List.js";
import Filter from "../components/Filter.js"
import Button from "../components/Button.js"



const ListContainer=({launchData,getYear,sortedData,sort})=>{







  return(
    <Fragment>
    <div className="btn-container">
    <Filter launchData={launchData} getYear={getYear}/>
    <Button text={"hello"} asset="sort-icons" func={()=>sort([1,2,3,4,5])}/>
    <List launchData={launchData} sortedData={sortedData}/>
    </div>
    </Fragment>


  )
}

export default ListContainer;
