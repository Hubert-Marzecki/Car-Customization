import { configureStore } from '@reduxjs/toolkit';

import carSlice from './slices/carSlice';
import pickedCarSlice from "./slices/pickedCarSlice";
import finalCarSlice from "./slices/finalCarSlice"

export default configureStore({
  reducer: {
    car: carSlice.reducer,
    pickedCar: pickedCarSlice.reducer,
    finalCar: finalCarSlice.reducer
  },
});
