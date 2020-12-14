import React from 'react'
import rocket from "../assets/img/rocket-image.png"



const Loading=()=>{

  return(
    <div className="loading-container-wrapper">
    <div className="loading-container">

    <img className="loading-img" src={rocket} alt="rocket-ship"/>

    <h1>Taking Off...</h1>


    </div>
    </div>
  )



}


export default Loading;
