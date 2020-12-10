import React,{Fragment,useState,useEffect} from "react";
import List from "../components/List.js"
import Sort from "../components/Sort.js"
import Filter from "../components/Filter.js"
import Navbar from "../components/Navbar.js"
import getYears from "../helpers/getYears"


//this will be the main container for all other elements
const Homepage=()=>{
  //state to hold fetched data
  const [launchData,setLaunchData]=useState("");
  const [years,setYears]=useState("");

  //state to hold sorted/filtered data
  // const [sortedData,setSortedData]=useState("");

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
  //
  // function filterData(){
  //   console.log("filter data has triggered")
  // }




  return(
    <Fragment>
    <Navbar/>
    <main className="main-container">
    <Filter launchData={launchData}/>
    <div className="background-image-container-wrapper">
    <div className="background-image-container"></div>
    </div>

    <List launchData={launchData}/>
    </main>
    <div className="btn-test" onClick={()=>getYears(launchData)}></div>

    </Fragment>
  )

}
export default Homepage
