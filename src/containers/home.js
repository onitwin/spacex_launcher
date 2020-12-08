import React,{Fragment} from "react";
import List from "../components/List.js"
import Sort from "../components/Sort.js"
import Filter from "../components/Filter.js"




const Homepage=()=>{


  return(
    <Fragment>
    <p>hello from the homepage</p>
    <List/>
    <Sort/>
    <Filter/>
    </Fragment>
  )

}
export default Homepage
