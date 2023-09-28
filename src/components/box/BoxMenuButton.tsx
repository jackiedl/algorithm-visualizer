import React from 'react';
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { boxActions, numberList } from '../../redux/features/boxSlice';
import { getMergeSortAnimation } from '../../ultis/mergesort';

function BoxMenuButton(props:any){
  const array = useAppSelector(numberList);
  const dispatch = useAppDispatch();

  const handleOnShuffle = () => {
    let arr = [...array];
    let i = arr.length;
    while(i !== 0){
      let j = Math.floor(Math.random() * i--);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    dispatch(boxActions.shuffleArray(arr));
  }

  const handleOnPlay = () => {
    
  }

  return(
    <div>
      <div onClick={handleOnShuffle}>
        Shuffle
      </div>
      <div onClick={handleOnPlay}>
        Play
      </div>
    </div>
  )
}

export default BoxMenuButton;