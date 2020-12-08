import React,{Fragment} from "react";
import List from "../components/List.js"
import Sort from "../components/Sort.js"
import Filter from "../components/Filter.js"


//this will be the main container for all other elements
const Homepage=()=>{




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
