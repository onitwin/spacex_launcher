import React from 'react'



const Button=({text,func,asset,clName})=>{




  return(
  
    <div className={clName} onClick={()=>func()}>
    <p className="default-btn-text">{text}</p>
    <div className={asset}></div>
    </div>

  )
}

export default Button;
