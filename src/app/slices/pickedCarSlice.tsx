import { createSlice } from "@reduxjs/toolkit";


export const pickedCar = createSlice({
    name: "pickedCar",
    initialState: [],
    reducers:{
        setPickedCar: ( state:any, action) => action.payload
    }
})

export const setPickedCar = (state:any) => state.pickedCar;
export default pickedCar;
