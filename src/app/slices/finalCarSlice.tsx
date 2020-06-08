import { createSlice } from "@reduxjs/toolkit";
import {FinalCar} from "../../Model";


function initialState() :FinalCar {
    return {
        name: "",
        engine:"",
        engineCost:0,
        drive:"",
        driveCost:0,
        fuel:"",
        fuelCost:0,
        cost:0,
        color: {
            r: 241,
            g: 112,
            b: 19,
            a: 1,
        }
    }
}


export const finalCar = createSlice({
    name: "finalCar",
    initialState: initialState(),
    reducers:{


        setFinalName: (state:FinalCar, action: {type: string, payload: {name: string}}) => {
            state.name =  action.payload.name
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
        setFinalColor: (state, action: {type:string, payload: {color : { r:number, g:number, b:number, a:number}}}) => {
            state.color = action.payload.color
},
        setFinalCarReset: (state:FinalCar) => {
            state.name= ""
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


export const setFinalCar =  (state:any ) => state.finalCar;
export default finalCar;
