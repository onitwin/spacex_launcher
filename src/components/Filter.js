import React ,{useState} from "react";
import getYears from "../helpers/getYears"
import Options from "./Options.js"




const Filter=({launchData})=>{

  const allYears=[]

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
    <div>
    <select className="year-filter-btn">
    <option>Filter by year</option>
    {years}

    </select>
    </div>
  )

}
export default Filter
