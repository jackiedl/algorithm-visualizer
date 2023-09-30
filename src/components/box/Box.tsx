import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { current } from '../../redux/features/boxSlice';

import BoxVisualizer from "./BoxVisualizer";
import Slider from "./Slider";
import BoxMenuButton from "./BoxMenuButton";

function Box(){
  const name = useAppSelector(current);

  return (
    <div id="box">
      <div className="box-menu">
        <div className="box-menu-header">
          {name}
        </div>
        <div className="box-menu main">
          <BoxMenuButton/>
          <Slider />
        </div>
      </div>
      <BoxVisualizer />
    </div>
  )
}

export default Box;