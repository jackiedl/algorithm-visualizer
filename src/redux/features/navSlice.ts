import { createSlice } from '@reduxjs/toolkit';
import { RootState} from "../app/store";

interface NavState{
  isOpen: boolean,
  sortAlgorithms: string[],
  searchAlgorithms: string[],
}

const initialState: NavState = {
  isOpen: false,
  sortAlgorithms: [
    "Bubble Sort",
    "Merge Sort",
    "Selection Sort",
    "Quick Sort",
  ],
  searchAlgorithms:[
    //"Binary Search",
  ]
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  }
});

export const navActions = navSlice.actions;

export const isOpen = (state: RootState) => state.nav.isOpen;
export const sortAlgorithms = (state: RootState) => state.nav.sortAlgorithms;
export const searchAlgorithms = (state: RootState) => state.nav.searchAlgorithms;

export default navSlice.reducer;