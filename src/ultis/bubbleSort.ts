import { swap } from "./base";

export function getBubbleAnimation(array:any){
  const animations:any = [];
  let arr = [...array];
  let n = arr.length;
  let i, j;
  let swapped;

  for (i = 0; i < n - 1; i++){
    swapped = false;
    for (j = 0; j < n - i - 1; j++){
      if (arr[j] > arr[j+1]){
        animations.push([j, j+1]);
        swap(arr, j, j+1);
        swapped = true;
      }
    }
    if (swapped === false){
      break;
    }
  }
  return {animation: animations, array: arr};
}