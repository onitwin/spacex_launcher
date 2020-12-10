import React,{Fragment} from "react";




const ListItem=({launch})=>{


  return(
    <Fragment>
    <div className="list-item">
    <div className="flight-number-container">
    <h1 className="flight-number-text">#1</h1>
    </div>
    <div className="mission-name-container">
    <h1 className="mission-name-text">{launch.mission_name}</h1>
    </div>
    <div className="date-container">
    <p>date goes here</p>

    </div>
    </div>
    </Fragment>
  )

}
export default ListItem
