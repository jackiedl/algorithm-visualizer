import React, {useState} from "react";
import BoxVisualizer from "./BoxVisualizer";
import Slider from "./Slider";
import BoxMenuButton from "./BoxMenuButton";

function Box(){
  const [elements, setElements] = useState(100);

  const sliderChange = (e:any) => {
    setElements(e.currentTarget.value);
  }
  return (
    <div id="box">
      <div className="box-menu">
        <div className="box-menu-header">
          Quick Sort
        </div>
        <Slider elements={elements} onChange={sliderChange} />
        <BoxMenuButton />
      </div>
      <BoxVisualizer elements={elements}/>
    </div>
  )
}

export default Box;