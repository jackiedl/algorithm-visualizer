import { swap } from "./base";

export function getSelectionAnimation(array:any){
  const animations:any = [];
  let arr = [...array];
  let i, j, min_idx;
  for (i = 0; i < arr.length; i++){
    min_idx = i;
    for (j = i; j < arr.length; j++){
      if (arr[j] < arr[min_idx]){
        min_idx = j;
      }
    }
    animations.push([i, min_idx]);
    swap(arr, min_idx, i);
  }
  return {animation: animations, array: arr};
}
