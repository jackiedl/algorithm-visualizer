import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from "../app/store";

interface BoxState{
  current: string,
  algorithms: string[],
  elements: number,
  numberList: number[],
  animationSpeed: number,
  primaryColor: string,
  secondaryColor: string,
}

const initialState: BoxState = {
  current: "Quick Sort",
  algorithms: [
    "Quick Sort",
    "Bubble Sort"
  ],
  elements: 100,
  numberList: Array.from(Array(100).keys()),
  animationSpeed: 1,
  primaryColor: "turquoise",
  secondaryColor: "red",
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
  }
});

export const boxActions = boxSlice.actions;

export const current = (state: RootState) => state.box.current;
export const algorithms = (state: RootState) => state.box.algorithms;
export const elements = (state: RootState) => state.box.elements;
export const numberList = (state: RootState) => state.box.numberList;

export default boxSlice.reducer;