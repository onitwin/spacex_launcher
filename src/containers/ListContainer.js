import React ,{Fragment} from 'react'
import List from "../components/List.js";
import Filter from "../components/Filter.js"



const ListContainer=({launchData,getYear,sortedData})=>{








  return(
    <Fragment>
    <div className="btn-container">
    <Filter launchData={launchData} getYear={getYear}/>
    <List launchData={launchData} sortedData={sortedData}/>
    </div>
    </Fragment>


  )
}

export default ListContainer;
