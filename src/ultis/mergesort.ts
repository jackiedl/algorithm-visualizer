export function getMergeAnimation(array:any){
  const merge_animations:any = [];
  const animations:any = [];
  let arr = mergeSort([...array], merge_animations);
  getSwaps(merge_animations, array, animations);
  return {animation: animations, array: arr}
}
function mergeSort(arr: any, animation:any):any{
  if (arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left, animation), mergeSort(right, animation), animation);
}
// sorts the left and right array slices
function merge(left:any, right:any, animation: any) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      animation.push([left[0], right[0]]);
      result.push(left.shift());
    } else {
      animation.push([right[0], left[0]]);
      result.push(right.shift());
    }
  }
  animation.push([...result, ...left, ...right]);
  return [...result, ...left, ...right];
}

//gets all the swaps needed to animate the merge
function getSwaps(animation: any, sorted:any, animations:any){
  let arr = [...sorted];
  for (let k = 0; k < animation.length; k++){
    let s = arr.indexOf(animation[k][0]);
    for (let i = 1; i < animation[k].length; i++){
      s = Math.min(s, arr.indexOf(animation[k][i]));
    }
    for (let j = 0; j < animation[k].length; j++){
      if (arr[s + j] !== animation[k][j]){
        animations.push([s+j, arr.indexOf(animation[k][j])]);
        let xid = arr.indexOf(animation[k][j]);
        let temp = arr[s+j];
        arr[s+j] = animation[k][j];
        arr[xid] = temp;
      }
    }
  }
}

