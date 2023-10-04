import { swap } from "./base";

export function getQuickAnimation(array:any){
  const animations:any = [];
  let arr = [...array];
  let n = arr.length;
  quickSort(arr, 0, n-1, animations);
  return {animation: animations, array: arr}
}

function partition(array:any, start:number, end:number, animation:any){
  let pivot = array[end];
  let i = start-1;
  
  for (let j = start; j <= end - 1; j++){
    if (array[j] < pivot){
      i++;
      animation.push([i, j]);
      swap(array, i, j);
    }
  }
  animation.push([i+1, end]);
  swap(array, i+1, end);
  return(i + 1);
}

function quickSort(array:any, start:number, end:number, animation:any){
  if (start < end){
    let pi = partition(array, start, end, animation);
    quickSort(array, start, pi-1, animation);
    quickSort(array, pi + 1, end, animation);
  }
}