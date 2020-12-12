import React from 'react';
import Button from "./Button"


const Navbar=({refresh,asset})=>{


  return(
    <header>
    <div className="navdiv">
    <div className="logo-group">
    <img className="navbar-logo" src="spacex-logo.png" alt="spaceX"/>
    <h3 className="navbar-text">LAUNCHES</h3>
    </div>
   <div className="navbar-btn-container">
    <Button text="Refresh" func={refresh} asset={asset}/>
    </div>
    </div>
    </header>

  )
}

export default Navbar;
