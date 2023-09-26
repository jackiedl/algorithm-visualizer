import React from 'react';

function Slider(props:any){
  return(
    <div className="box-menu-slider">
      <div>
        Elements:
        <span>{props.elements}</span>
      </div>
      <input type="range" value={props.elements} min={10} max={1000} step={5} name="item-num" id="slider" onChange={props.onChange}/>
  </div>
  )
}

export default Slider;