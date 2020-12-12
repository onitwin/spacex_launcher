import React,{Fragment,useState,useEffect} from "react";

import Navbar from "../components/Navbar.js"
import ListContainer from "./ListContainer.js"


//this will be the main container for all other elements
const Homepage=()=>{
  //state to hold fetched data
  const [launchData,setLaunchData]=useState("");


  //state to hold filtered/sorted data
  const [sortedData,setSortedData]=useState("")

  //state to hold selected year from Filter
  const [year,setYear]=useState("");

  //function to obtain launch data from spaceX Api
  const fetchLaunchData=async() =>{
    fetch("https://api.spacexdata.com/v3/launches")
    .then(data=>data.json())
    .then(data=>setLaunchData(data))
  }

  //useEffect to call fetchLaunchData function onMount
  useEffect(()=>{
    fetchLaunchData()
  },[])

  useEffect(()=>{
    filterYears(year)
  },[year])

  //placeholders for data update functions
  // function sortData(){
  //   console.log("sort data has triggered")
  // }

  //function to get year  filter component and set state in home component
  function getYear(input){
    setYear(input)
  }

  //function sets sortedData to include only launches in year matching year variable, or all years if no variable
  function filterYears(data){
    year?setSortedData(launchData.filter((launch)=>launch.launch_year ===data)):setSortedData(launchData)
  }




  return(
    <Fragment>
    <Navbar/>
    <main className="main-container">
    <div className="background-image-container-wrapper">
    <div className="background-image-container"></div>
    </div>
    <ListContainer launchData={launchData}  sortedData={sortedData} getYear={getYear}/>
    </main>
    <btn onClick={()=>filterYears(year)}>test function</btn>
    </Fragment>
  )

}
export default Homepage


  // .then(setSortedData(launchData))
