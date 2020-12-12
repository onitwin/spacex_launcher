import React from 'react'



const Button=({text,func,asset})=>{




  return(
    <div>
    <div className="default-btn" onClick={()=>func()}>
    <p className="default-btn-text">{text}</p>
    <div className={asset}></div>
    </div>
    </div>
  )
}

export default Button;
