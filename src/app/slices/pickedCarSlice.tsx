import { createSlice } from "@reduxjs/toolkit";
import {PickedCar} from "../../Model";


function initialState() :PickedCar[] {
return  []
}

export const pickedCar = createSlice({
    name: "pickedCar",
    initialState: initialState(),
    reducers:{
        setPickedCar: ( state:any, action) => action.payload
    }
})

export const setPickedCar = (state:any) => state.pickedCar;
export default pickedCar;

// todo action type