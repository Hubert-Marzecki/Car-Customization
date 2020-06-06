import { createSlice } from "@reduxjs/toolkit";
import {FinalCar} from "../../Model";


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


export const finalCar = createSlice({
    name: "finalCar",
    initialState: initialState(),
    reducers:{


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
        setFinalCarReset: (state:FinalCar) => {
            state.name= ""
            state.body = ""
            state.engine = ""
            state.drive = ""
            state.fuel = ""
            state.cost = 0
            state.engineCost = 0
            state.driveCost = 0
            state.fuelCost = 0
        },
    }
})


export const setFinalCar  = (state:any ) => state.finalCar;
export default finalCar;
