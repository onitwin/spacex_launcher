import React ,{Fragment,useState} from "react";
import Options from "./Options.js"




const Filter=({launchData,filterFunction})=>{

  const allYears=[]

  const [selectedYear,setSelectedYear]=useState("")

  const years=[...launchData].map((year)=>{
    if(!allYears.includes(year.launch_year)){
      allYears.push(year.launch_year)
      return(
      <Options year={year.launch_year}/>
    )
    }
    else{
      return allYears.push(year.launch_year)
    }
  })




  return(
    <Fragment>
    <select className="year-filter-btn">
    <option >Filter by year</option>
    {years}
    </select>
    </Fragment>
  )

}
export default Filter
