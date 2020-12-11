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

  //placeholders for data update functions
  // function sortData(){
  //   console.log("sort data has triggered")
  // }

  //function to put result from filter year into year and
  function filterData(input){
    console.log("filter data has triggered")
  }




  return(
    <Fragment>
    <Navbar/>
    <main className="main-container">
    <div className="background-image-container-wrapper">
    <div className="background-image-container"></div>
    </div>
    <ListContainer launchData={launchData} filterFunction={filterData}/>
    </main>
    </Fragment>
  )

}
export default Homepage
