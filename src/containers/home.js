import React,{Fragment,useState,useEffect} from "react";
import List from "../components/List.js"
import Sort from "../components/Sort.js"
import Filter from "../components/Filter.js"
import Navbar from "../components/Navbar.js"


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
    <Navbar/>
    <main className="main-container">
    <div className="image-container">
    </div>

    <List/>
    <Sort/>
    <Filter/>
    </main>
    </Fragment>
  )

}
export default Homepage
