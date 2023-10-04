import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from "../app/store";

interface BoxState{
  current: string,
  elements: number,
  numberList: number[],
}

const initialState: BoxState = {
  current: "Bubble Sort",
  elements: 100,
  numberList: Array.from(Array(100).keys()),
}

export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    updateAlgorithm: (state, action: PayloadAction<any>) => {
      state.current = action.payload;
    },
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
export const elements = (state: RootState) => state.box.elements;
export const numberList = (state: RootState) => state.box.numberList;

export default boxSlice.reducer;