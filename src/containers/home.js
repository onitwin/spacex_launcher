import React,{Fragment,useState,useEffect} from "react";
import List from "../components/List.js"
import Sort from "../components/Sort.js"
import Filter from "../components/Filter.js"


//this will be the main container for all other elements
const Homepage=()=>{

  const [launchData,setLaunchData]=useState("")

  function fetchLaunchData(){
    fetch("https://api.spacexdata.com/v3/launches")
    .then(data=>data.json())
    .then(data=>setLaunchData(data))
  }

  useEffect(()=>{
    fetchLaunchData()
  },[])




  return(
    <Fragment>
    <p alt="howdy">hello from the homepage</p>
    <List/>
    <Sort/>
    <Filter/>
    </Fragment>
  )

}
export default Homepage
