import { createSlice } from "@reduxjs/toolkit";
import {FinalCar, State} from "../../Model";


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

const setDrive = (state: FinalCar, action: { type: string, payload: { drive: string, driveCost: number } }) => {
    state.drive = action.payload.drive
    state.driveCost = action.payload.driveCost
};
const setFuel = (state: FinalCar, action: { type: string, payload: { fuel: string, fuelCost: number } }) => {
    state.fuel = action.payload.fuel
    state.fuelCost = action.payload.fuelCost
};

const setEngine =  (state:FinalCar, action: {type: string, payload: {engine: string, engineCost: number}}) => {
    state.engine = action.payload.engine
    state.engineCost = action.payload.engineCost
}
const updatePrice = (state: FinalCar) => {
    state.cost = state.engineCost + state.driveCost + state.fuelCost
};
const setColors =  (state:FinalCar, action: {type:string, payload: {color : { r:number, g:number, b:number, a:number}}}) => {
        state.color = action.payload.color
    }

export const finalCar = createSlice({
    name: "finalCar",
    initialState: initialState(),
    reducers:{


        setFinalName: (state:FinalCar, action: {type: string, payload: {name: string}}) => {
            state.name =  action.payload.name
        },

        setFinalEngine: (state:FinalCar, action: {type: string, payload: {engine: string, engineCost: number}}) => {
            setEngine(state,action)
            updatePrice(state);
        },
        setFinalDrive: (state:FinalCar, action: {type: string, payload: {drive: string, driveCost: number}}) => {
            setDrive(state, action)
            updatePrice(state);
        },

        setFinalFuel: (state:FinalCar, action: {type: string, payload: {fuel: string, fuelCost: number}}) => {
            setFuel(state, action)
            updatePrice(state);
        },

        // setDriveAndFuel: (state: FinalCar, action: { type: string, payload: { drive: string, driveCost: number, fuel: string, fuelCost: number } }) => {
        //     setDrive(state, action);
        //     setFuel(state, action);
        //     updatePrice(state);
        // },
        setFinalCost: updatePrice,
        setFinalColor: (state, action: {type:string, payload: {color : { r:number, g:number, b:number, a:number}}}) => {
            setColors(state, action)
},
        resetAndSetNewCar: (state:FinalCar, action: {type: string, payload: {name: string}}) => {
            state.name= ""
            state.engine = ""
            state.drive = ""
            state.fuel = ""
            state.cost = 0
            state.engineCost = 0
            state.driveCost = 0
            state.fuelCost = 0
            state.name =  action.payload.name
        },
    }
}
)
export const setFinalCar : (state: State) => FinalCar =  (state:State ) => state.finalCar;
export default finalCar;
