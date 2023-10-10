import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boxSlice from '../features/boxSlice';
import navSlice  from '../features/navSlice';

export const store = configureStore({
  reducer: {
    box: boxSlice,
    nav: navSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([]);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;