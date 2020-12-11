import React,{Fragment} from "react";



//returns a single year for use with filter
const Options=({year,filterFunction})=>{


  return(
  <option value={year}>{year}</option>
  )

}
export default Options
