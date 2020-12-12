import React ,{Fragment,useState,useEffect} from "react";
import Options from "./Options.js"




const Filter=({launchData,filterFunction})=>{



  //state to hold selcted result from options
  const [selectedYear,setSelectedYear]=useState("")

  //currently submitting filter to quick-add async
  function handleChange(event){
    setSelectedYear(event.target.value)
  }

  useEffect(()=>{
    filterFunction(selectedYear)
  },[selectedYear])



  //empty array to push each unique year identified
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
    <Fragment>
    <select onChange={handleChange} className="year-filter-btn">
    <option value="">Filter by Year</option>
    <option value="" >All Years</option>
    {years}
    </select>
    </Fragment>
  )

}
export default Filter

// <select onChange={()=>filterFunction(selectedYear)} className="year-filter-btn">
