export function playMergeAnimation(){

}

function getMergeSortAnimation(array:any){
  const animations:any = [];
  if(array.length <= 1) return array;
  const auxiliaryArray = [...array];
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray:any, startIdx:any, endIdx:any, auxiliaryArray:any, animations:any){
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray:any, startIdx:any, middleIdx:any, endIdx:any, auxiliaryArray:any, animations:any) {

}