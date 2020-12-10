const getYears=(data)=>{
    let years = []
    data.forEach((data) => {
      if (!years.includes(data.launch_year)){
        years.push(data.launch_year)
      }
    })
    console.log(years)
  return years;

}

module.exports=getYears;
