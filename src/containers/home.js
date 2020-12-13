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
    .then(console.log("Data successfully fetched"))
  }

  //useEffect to call fetchLaunchData function onMount
  useEffect(()=>{
    fetchLaunchData()
  },[])

  //useEffect to call 'filterYears' when 'year' variable updates
  useEffect(()=>{
    filterYears(year)
  },[year])


  //function to get year  filter component and set state in home component
  function getYear(input){
    setYear(input)
  }

  //function sets sortedData to include only launches in year matching year variable, or all years if no variable
  function filterYears(data){
    year?setSortedData(launchData.filter((launch)=>launch.launch_year ===data)):setSortedData(launchData)
    console.log(`filter data has triggered for year ${data}`)
  }

  //actions fresh fetch request- subsequent setting of 'year' to '""' triggers re-render via useEffect(filterYears)
  function refreshData(){
    fetchLaunchData()
    .then(setYear(""))
    .then(console.log("refreshData has triggered"))
  }


  function invertDataOrder(){
    let tempData=[]
    let arrayTemplate
    sortedData?arrayTemplate=sortedData:arrayTemplate=launchData
    console.log(arrayTemplate)
    let len=arrayTemplate.length
    for (let i=0;i<len;i++){
    tempData.push(arrayTemplate.pop())
  }
    setSortedData(tempData)
  }





  return(
    <Fragment>
    <Navbar refresh={refreshData} asset="refresh-image"/>
    <main className="main-container">
    <div className="background-image-container-wrapper">
    <div className="background-image-container"></div>
    </div>
    <ListContainer launchData={launchData}  sortedData={sortedData} getYear={getYear} sort={invertDataOrder}/>
    </main>
    </Fragment>
  )

}
export default Homepage
