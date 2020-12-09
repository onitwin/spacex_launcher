import React,{Fragment,useState,useEffect} from "react";
import List from "../components/List.js"
import Sort from "../components/Sort.js"
import Filter from "../components/Filter.js"
import Navbar from "../components/Navbar.js"


//this will be the main container for all other elements
const Homepage=()=>{
  //state to hold fetched data
  const [launchData,setLaunchData]=useState("");

  //state to hold sorted/filtered data
  // const [sortedData,setSortedData]=useState("");

  //function to obtain launch data from spaceX Api
  function fetchLaunchData(){
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
    <div className="image-container">
    </div>

    <List launchData={launchData}/>
    <Sort/>
    <Filter/>
    </main>
    </Fragment>
  )

}
export default Homepage
