export function getMergeAnimation(array:any){
  const animations:any = [];
  console.log(array);
  let arr = mergeSort([...array], animations);
  console.log(arr);
  return {animation: animations, array: arr}
}
function mergeSort(arr: any, animation:any):any{
  if (arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left, animation), mergeSort(right, animation), animation, arr);
}

function merge(left:any, right:any, animation: any, arr: any) {
  const result = [];
  let count = 1;
  console.log(count);
  console.log("Left: " + left);
  console.log("Right:" + right);
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      let l_shift = left.shift();
      result.push(l_shift);
    } else {
      let r_shift = right.shift();
      result.push(r_shift);
    }
    console.log("Results:" + result);
    count += 1;
  }
   
  return [...result, ...left, ...right];
}