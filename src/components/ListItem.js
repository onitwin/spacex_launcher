import React,{Fragment} from "react";




const ListItem=({launch})=>{


  return(
    <Fragment>
    <li className="list-item">
    <p>hello {launch.mission_name}</p>
    </li>
    </Fragment>
  )

}
export default ListItem
