import { createSlice} from "@reduxjs/toolkit";
import {Action, CarsModels, PickedCar, State} from "../../Model";

function initialState() : CarsModels[] {
return []
}

export const car = createSlice({
    name: "car",
    initialState: initialState(),
    reducers:{
        setCar: ( state:CarsModels[],  action: Action<any>) => action.payload
    }

})
// todo payload action type
export const setCar : (state: State) => CarsModels[] = (state:State) => state.car;
export default car;
