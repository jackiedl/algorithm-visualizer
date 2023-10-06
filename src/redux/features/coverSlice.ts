import { createSlice } from '@reduxjs/toolkit';
import { RootState} from "../app/store";

interface CoverState{
  algorithm: {
    name: string,
    description: string,
    average: string,
    best: string,
    worst: string,
    space: string
  }
}

const initialState: CoverState = {
  algorithm: {
    name: "",
    description: "",
    average: "",
    best: "",
    worst: "",
    space: "",
  }
}

export const coverSlice = createSlice({
  name: "cover",
  initialState,
  reducers: {
      //get algorithm -> updates state 
  }
});

export const navActions = coverSlice.actions;

// export const isOpen = (state: RootState) => state.nav.isOpen;

export default coverSlice.reducer;