import React,{Fragment} from "react";



//component to return individal launch item for display within list component
const ListItem=({launch})=>{


  return(
    <Fragment>
    <div className="list-item">
    <div className="flight-number-container">
    <h1 className="flight-number-text">#{launch.flight_number}</h1>
    </div>
    <div className="mission-name-container">
    <h1 className="mission-name-text">{launch.mission_name}</h1>
    </div>
    <div className="date-container">
    <p className="flight-date">Date Placeholder</p>
    <h3 className="flight-name">{launch.rocket.rocket_name}</h3>
    </div>
    </div>
    </Fragment>
  )

}
export default ListItem
