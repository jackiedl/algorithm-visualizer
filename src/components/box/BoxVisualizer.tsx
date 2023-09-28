import React from 'react';
import { useAppSelector } from "../../redux/app/hooks";
import { elements, numberList } from '../../redux/features/boxSlice';

function BoxVisualizer(){
  const element = useAppSelector(elements);
  const array = useAppSelector(numberList);

  return(
    <div id="bar-container">
      {
        array.map((value:number, idx:number) => (
          <div
            className="bar"
            key={idx}
            style={{
              left:`${idx * (100/element)}%`,
              width:`${100/element}%`,
              height:`${(value+1)*(100/element)}%`,
            }}
          ></div>
        ))
      }
    </div>
  )
}

export default BoxVisualizer;