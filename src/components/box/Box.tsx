import React from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { current } from '../../redux/features/boxSlice';

import BoxVisualizer from "./BoxVisualizer";
import Slider from "./Slider";
import BoxMenuButton from "./BoxMenuButton";

function Box(){
  const name = useAppSelector(current);

  // const shuffle = () =>{
  //   let i = array.length;
  //   while(i !== 0){
  //     let j = Math.floor(Math.random() * i--);
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   updateArray([...array]);
  // }

  return (
    <div id="box">
      <div className="box-menu">
        <div className="box-menu-header">
          {name}
        </div>
        <Slider />
        <BoxMenuButton/>
      </div>
      <BoxVisualizer />
    </div>
  )
}

export default Box;