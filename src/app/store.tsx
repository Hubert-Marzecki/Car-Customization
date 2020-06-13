import {configureStore} from '@reduxjs/toolkit';
import  stateSlice from './slices/state';


export default configureStore({
  reducer: {
    state: stateSlice.reducer
  },
});
 