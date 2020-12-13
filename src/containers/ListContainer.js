import React ,{Fragment} from 'react'
import List from "../components/List.js";
import Filter from "../components/Filter.js"
import Button from "../components/Button.js"



const ListContainer=({launchData,getYear,sortedData,sort,ascending})=>{







  return(

    <div className="list-container-div">
    <div className="btn-container">
    <Filter launchData={launchData} getYear={getYear}/>
    {ascending?<Button text={"Sort Decending"} asset="sort-icons" func={sort} clName={"default-btn sort"}/>:<Button text={"Sort Ascending"} asset="sort-icons" func={sort} clName={"default-btn sort"}/>}
    </div>
    <List launchData={launchData} sortedData={sortedData}/>
    </div>




  )
}

export default ListContainer;
