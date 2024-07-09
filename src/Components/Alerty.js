import React from 'react'

function Alerty(props) {
    const capitalise = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style = {{height : "55px"}}>
   {props.alert &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
        </div> }
  </div>
  )
}

export default Alerty
