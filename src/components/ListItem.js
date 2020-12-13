import React ,{useEffect,useState}from "react";


//component to return individal launch item for display within list component
const ListItem=({launch})=>{

  const workingDate=launch.launch_date_unix*1000

  const myDate=(item)=>{
    let suffix=""
    const dayOfMonth=new Date(item).getDate()
    const digits=dayOfMonth.toString().split('')
    if(digits[digits.length -1]==1){
      suffix="st"
    }else if(digits[digits.length-1]==2){
      suffix="nd"
    }else if(digits[digits.length-1]==3){
      suffix="rd"
    }else{
      suffix="th"
    }
      return dayOfMonth.toString()+suffix
  }

  const myMonth=(item)=>{
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const monthOfYear=new Date(item).getMonth()
    return months[monthOfYear]
  }

  const myYear=(item)=>{
    const year=new Date(item).getFullYear()
    return year
  }

  const trueDate=`${myDate(workingDate)} ${myMonth(workingDate)} ${myYear(workingDate)}`










  return(
    <div className="list-item">
    <div className="flight-number-container">
    <h1 className="flight-number-text">#{launch.flight_number}</h1>
    </div>
    <div className="mission-name-container">
    <h1 className="mission-name-text">{launch.mission_name}</h1>
    </div>
    <div className="date-container">
    <p className="flight-date">{trueDate}</p>
    <h3 className="flight-name">{launch.rocket.rocket_name}</h3>
    </div>

    </div>
  )

}
export default ListItem

// <btn onClick={()=>myDate(launch)}>Convert</btn>
