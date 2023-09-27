import React from 'react';
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { boxActions, elements } from '../../redux/features/boxSlice';

function Slider(){
  const element = useAppSelector(elements);

  const dispatch = useAppDispatch();

  const handleOnChange = (e: any) => {
    dispatch(boxActions.updateElements(e.currentTarget.value));
  }

  return(
    <div className="box-menu-slider">
      <div>
        Elements:
        <span>{element}</span>
      </div>
      <input type="range" value={element} min={10} max={1000} step={5} name="item-num" id="slider" onChange={handleOnChange}/>
  </div>
  )
}

export default Slider;