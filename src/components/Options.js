import React,{Fragment} from "react";



//returns a single year for use with filter
const Options=({year})=>{


  return(
    <Fragment>
  <option value={year}>{year}</option>
    </Fragment>
  )

}
export default Options
