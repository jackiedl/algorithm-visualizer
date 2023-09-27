import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import boxSlice from '../features/boxSlice';

export const store = configureStore({
  reducer: {
    box: boxSlice,
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