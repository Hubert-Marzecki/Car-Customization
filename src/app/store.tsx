import {configureStore} from '@reduxjs/toolkit';
import  stateSlice from './slices/state';
// import carSlice from './slices/carsSlice';
// import pickedCarSlice from "./slices/pickedCarSlice";
// import finalCarSlice from "./slices/finalCarSlice"



export default configureStore({
  reducer: {
    state: stateSlice.reducer
    // car: carSlice.reducer,
    // pickedCar: pickedCarSlice.reducer,
    // finalCar: finalCarSlice.reducer
  },
});
 