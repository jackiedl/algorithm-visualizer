import React, {useState} from "react";

function BoxMenu(){
  const [elements, setElements] = useState(100);

  const sliderChange = (e:any) => {
    setElements(e.currentTarget.value);
  }

  return (
    <div className="box-menu">
      <div className="box-menu-header">
        
      </div>
      <div className="box-menu-slider">
        <div>
          Elements:
          <span>{elements}</span>
        </div>
        <input type="range" value={elements} min={10} max={1000} step={5} name="item-num" id="slider" onChange={sliderChange}/>
      </div>
      <div className="box-menu-btn"></div>
    </div>
  )
}

export default BoxMenu;