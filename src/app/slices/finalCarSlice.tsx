import { createSlice } from "@reduxjs/toolkit";
import {FinalCar} from "../../Model";
import thunk from 'redux-thunk'


function initialState() :FinalCar {
    return {
        name: "",
        body: "",
        engine:"",
        engineCost:0,
        drive:"",
        driveCost:0,
        fuel:"",
        fuelCost:0,
        cost:0
    }
}

// wydzielić json na pobieranie samych nazw i img  i pobierać go przy pierwszym fetch
// 


export const finalCar = createSlice({
    name: "finalCar",
    initialState: initialState(),
    reducers:{

            // setFinalName: (state, action) => state.token = action.payload.test,

// setFinalCarInfo: (state:FinalCar, action) => {
//     state.name = action.payload.name
//     state.body = action.payload.body
//     state.engine = action.payload.engine
//     state.engineCost = action.payload.engineCost
//     state.fuel = action.payload.fuel
//     state.fuelCost = action.payload.fuelCost
//     state.cost = action.payload.cost
//     console.log(action.payload)
// },


        setFinalName: (state:FinalCar, action: {type: string, payload: {name: string}}) => {
            state.name =  action.payload.name
        },
        setFinalBody: (state:FinalCar, action) => {
            state.body = action.payload.body
        },
        setFinalEngine: (state:FinalCar, action: {type: string, payload: {engine: string, engineCost: number}}) => {
            state.engine = action.payload.engine
            state.engineCost = action.payload.engineCost
        },
        setFinalDrive: (state:FinalCar,  action: {type: string, payload: {drive: string, driveCost: number}}) => {
            state.drive = action.payload.drive
            state.driveCost = action.payload.driveCost
        },
        setFinalFuel: (state:FinalCar,  action: {type: string, payload: {fuel: string, fuelCost: number}}) => {
            state.fuel = action.payload.fuel
            state.fuelCost = action.payload.fuelCost
        },
        setFinalCost: (state:FinalCar) => {
            state.cost = state.engineCost + state.driveCost + state.fuelCost
        },

    }
})
export const {
 setFinalBody, setFinalCost,setFinalDrive, setFinalEngine,setFinalFuel,setFinalName
} = finalCar.actions;

export const setFinalCar = (state:any) => state.finalCar;
export default finalCar;
