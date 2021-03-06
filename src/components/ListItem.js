import React ,{useEffect,useState}from "react";


//component to return individal launch item for display within list component
const ListItem=({launch})=>{

  //variable to hold unix time for use in functions
  const workingDate=launch.launch_date_unix*1000

  //function to parse 1-31 from month and return string with correct suffix
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

  //function to return the month of the year as a string after parsing unix
  const myMonth=(item)=>{
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const monthOfYear=new Date(item).getMonth()
    return months[monthOfYear]
  }

  //function to return year from unix value
  const myYear=(item)=>{
    const year=new Date(item).getFullYear()
    return year
  }

  //variable to hold parsed data for display in requested format
  const trueDate=`${myDate(workingDate)} ${myMonth(workingDate)} ${myYear(workingDate)}`



  return(
    <article className="list-item">
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

    </article>
  )

}
export default ListItem
