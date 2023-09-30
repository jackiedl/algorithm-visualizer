import React from 'react';

import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { boxActions, numberList } from '../../redux/features/boxSlice';
import { getSelectionAnimation } from '../../ultis/selectionSort';
import { colorAnimation } from '../../ultis/base';

function BoxMenuButton(){
  const array = useAppSelector(numberList);
  const dispatch = useAppDispatch();

  async function handleOnShuffle(){
    let arr = [...array];
    let animation:any = []
    let i = arr.length;
    while(i !== 0){
      let j = Math.floor(Math.random() * i--);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      animation.push([i, j]);
    }
    const arrayBars = document.querySelectorAll<HTMLElement>(".bar");
    await colorAnimation(animation, arrayBars);
    dispatch(boxActions.updateArray(arr));
  }

  async function handleOnPlay () {
    const sortedArray = getSelectionAnimation([...array]);
    const arrayBars = document.querySelectorAll<HTMLElement>(".bar");
    await colorAnimation(sortedArray.animation, arrayBars);
    dispatch(boxActions.updateArray(sortedArray.array));
  }

  return(
    <div className="box-menu-icons">
      <div className="clickable-btn">
        <ShuffleRoundedIcon className="icon icon-btn menu-btn" onClick={handleOnShuffle}/> 
      </div>
      <div className="clickable-btn">
        <PlayArrowIcon className="icon icon-btn menu-btn" onClick={handleOnPlay}/> 
      </div>
    </div>
  )
}

export default BoxMenuButton;