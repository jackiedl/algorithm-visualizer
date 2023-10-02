export function getMergeAnimation(array:any){
  const animations:any = [];
  let arr = mergeSort(array, animations);
  return {animation: animations, array: arr}
}

function mergeSort(arr:any, animation: any){
  let sorted = Array.from(arr);
  let n = sorted.length;
  let buffer = new Array(n);

  for (let size = 1; size < n; size *= 2){
    for (let leftStart = 0; leftStart < n; leftStart += 2*size){
      let left = leftStart;
      let right = Math.min(left + size, n);
      let leftLimit = right;
      let rightLimit = Math.min(right + size, n);

      merge(left, right, leftLimit, rightLimit, sorted, buffer, animation);
    }
    let temp = sorted;
    sorted = buffer;
    buffer = temp;
  }
  return sorted;
}

function merge(left:number, right:number, leftLimit:number, rightLimit:number, sorted:any, buffer:any, animation: any) {
  let i = left;
  
  //Compare the two sub arrays and merge them in the sorted order
  while (left < leftLimit && right < rightLimit) {
    if (sorted[left] <= sorted[right]) {
      animation.push([i, left]);
      buffer[i++] = sorted[left++];
    } else {
      animation.push([i, right]);
      buffer[i++] = sorted[right++];
    }
  }

  //If there are elements in the left sub arrray then add it to the result
  while (left < leftLimit) {
    buffer[i++] = sorted[left++];
  }

  //If there are elements in the right sub array then add it to the result
  while (right < rightLimit) {
    buffer[i++] = sorted[right++];
  }
}