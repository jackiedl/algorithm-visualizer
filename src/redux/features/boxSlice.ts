import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from "../app/store";

interface BoxState{
  current: string,
  elements: number,
  numberList: number[],
  algorithm: {
    average: string,
    best: string,
    worst: string,
    space: string
    description: string[],
    code: string,
  }
}

const initialState: BoxState = {
  current: "Bubble Sort",
  elements: 100,
  numberList: Array.from(Array(100).keys()),
  algorithm: {
    average: "O(n²)",
    best: "O(n)",
    worst: "O(n²)",
    space: "O(n)",
    description: [
      "Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.",
      "The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.",
      "It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better. It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.",
    ],
    code: 
`function bubbleSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < ( arr.length - i -1 ); j++) {
      if(arr[j] > arr[j+1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
}`
  }
}

export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    updateElements: (state, action: PayloadAction<any>) => {
      state.elements = action.payload;
      state.numberList = [...Array.from(Array(parseInt(action.payload)).keys())];
    },
    updateArray: (state, action: PayloadAction<any>) => {
      state.numberList = [...action.payload];
    },
    updateAlgorithm: (state, action: PayloadAction<any>) => {
      state.current = action.payload;
      if (action.payload === "Merge Sort"){
        state.algorithm = 
        {
          average: "O(n x log n)",
          best: "O(n x log n)",
          worst: "O(n x log n)",
          space: "O(n)",
          description: [
            "Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.",
            "The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.",
          ],
          code: 
`function mergeSort(arr){
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
  const results = []
  while (left.length && right.length){
    if (left[0] < right[0])
      results.push(left.shift());
    else 
      results.push(right.shift());
  }
  return [...result, ...left, ...right];
}`
        }
      }
      if (action.payload === "Bubble Sort"){
        state.algorithm = 
        {
          average: "O(n²)",
          best: "O(n)",
          worst: "O(n²)",
          space: "O(n)",
          description: [
            "Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.",
            "The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.",
            "It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better. It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.",
          ],
          code:
`function bubbleSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < ( arr.length - i -1 ); j++) {
      if(arr[j] > arr[j+1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
}`
        }
      }
      if (action.payload === "Selection Sort"){
        state.algorithm = 
        {
          average: "O(n²)",
          best: "O(n²)",
          worst: "O(n²)",
          space: "O(1)",
          description: [
            "Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.",
            "It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.",
          ],
          code:
`function selectionSort(arr){
  for (var i = 0; i < arr.length; i++){
    let min = i;
    for (var j = i + 1; j < arr.length; j++){
      if (arr[min] > arr[j]){
        min = j;
      }
    }  
    if (i != min){
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}` 
        }
      }
      if (action.payload === "Quick Sort"){
        state.algorithm = 
        {
          average: "O(n x log n)",
          best: "O(n x log n)",
          worst: "O(n²)",
          space: "O(n)",
          description: [
            "Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.",
            "This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.",
            "This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.",
          ],
          code: 
`function swap(arr, x, y){
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
function quickSort(arr, start, end){
  if (start < end){
    let p = partition(arr, start, end);
    quickSort(array, start, p-1)
    quickSort(array, p+1, end)
  }
}
function partition(arr, start, end){
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
}`
        }
      }
    },
  }
});

export const boxActions = boxSlice.actions;

export const current = (state: RootState) => state.box.current;
export const elements = (state: RootState) => state.box.elements;
export const numberList = (state: RootState) => state.box.numberList;
export const algorithm = (state: RootState) => state.box.algorithm;

export default boxSlice.reducer;
