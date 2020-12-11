import React ,{Fragment,useState} from "react";
import Options from "./Options.js"




const Filter=({launchData,filterFunction})=>{

  //state to hold selcted result from options
  const [selectedYear,setSelectedYear]=useState("2001")



  //empty array to push each unique year identified
  const allYears=[]

  const years=[...launchData].map((year)=>{
    if(!allYears.includes(year.launch_year)){
      allYears.push(year.launch_year)
      return(
      <Options filterFunction={filterFunction}year={year.launch_year}/>
    )
    }
    else{
      return allYears.push(year.launch_year)
    }
  })




  return(
    <Fragment>
    <select onChange={()=>filterFunction(selectedYear)} className="year-filter-btn">
    <option >Filter by year</option>
    {years}
    </select>
    </Fragment>
  )

}
export default Filter
