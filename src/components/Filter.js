import React ,{Fragment,useState,useEffect} from "react";
import Options from "./Options.js"
import { v4 as uuidv4 } from 'uuid'; //this is to generate unique keys




const Filter=({launchData,getYear})=>{



  //state to hold selected result from options- default empty string
  const [selectedYear,setSelectedYear]=useState("")

  //currently submitting filter to quick-add async
  function handleChange(event){
    setSelectedYear(event.target.value)
  }

  //looks for changes to 'selectedYear' state and passes to home component
  useEffect(()=>{
    getYear(selectedYear)
  },[selectedYear])



  //empty array to push each unique year identified
  const allYears=[]

  //map over launch data and push unique values to 'allYears' for comparison to generate unique <options>
  const years=[...launchData].map((year)=>{
    if(!allYears.includes(year.launch_year)){
      allYears.push(year.launch_year)
      return(
      <Options key={uuidv4()} year={year.launch_year}/>
    )
    }
    else{
      return allYears.push(year.launch_year)
    }
  })




  return(
    <Fragment>
    <select onChange={handleChange} className="year-filter-btn">
    <option className="filter-btn-options" value="">Filter by Year</option>
    <option value="" >All Years</option>
    {years}
    </select>
    </Fragment>
  )

}
export default Filter

// <select onChange={()=>filterFunction(selectedYear)} className="year-filter-btn">
