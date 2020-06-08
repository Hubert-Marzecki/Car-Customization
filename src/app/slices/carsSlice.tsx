import { createSlice} from "@reduxjs/toolkit";
import {CarsModels} from "../../Model";

function initialState() : CarsModels[] {
return []
}

export const car = createSlice({
    name: "car",
    initialState: initialState(),
    reducers:{
        setCar: ( state:CarsModels[], action) => action.payload
    }
})

export const setCar = (state:any) => state.car;
export default car;

// todo payload action type