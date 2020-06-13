import { createSlice} from "@reduxjs/toolkit";
import {Action, AvaiableCar, CustomizedCar, State, PickedCar} from "../../Model";

const setDrive = (
  state: State,
  action: { type: string; payload: { drive: string; driveCost: number } }
) => {
  state.customizedCar.drive = action.payload.drive;
    state.customizedCar.driveCost = action.payload.driveCost;
};
const setFuel = (
  state: State,
  action: { type: string; payload: { fuel: string; fuelCost: number } }
) => {
    state.customizedCar.fuel = action.payload.fuel;
    state.customizedCar.fuelCost = action.payload.fuelCost;
};

const setEngine = (
  state: State,
  action: { type: string; payload: { engine: string; engineCost: number } }
) => {
    state.customizedCar.engine = action.payload.engine;
    state.customizedCar.engineCost = action.payload.engineCost;
};
// 
const setColors = (
  state: State,
  action: {
    type: string;
    payload: { color: { r: number; g: number; b: number; a: number } };
  }
) => {
  state.customizedCar.color = action.payload.color;
};

function initialCustomizedCar(): CustomizedCar  {
  return {
    name: "",
    engine: "",
    engineCost: 0,
    drive: "",
    driveCost: 0,
    fuel: "",
    fuelCost: 0,
    color: {
      r: 241,
      g: 112,
      b: 19,
      a: 1,
    },
  };
}

function initialState() : State {
    return {
        availableCars: [],
        carDetails: null,
        customizedCar: initialCustomizedCar()
    };
} 

export  const state = createSlice({
         name: "state",
         initialState: initialState(),
         reducers: {
           setFinalName: (
             state: State,
             action: { type: string; payload: { name: string } }
           ) => {
             state.customizedCar.name = action.payload.name;
           },

           setFinalEngine: (
             state: State,
             action: {
               type: string;
               payload: { engine: string; engineCost: number };
             }
           ) => {
             setEngine(state, action);
           },
           setFinalDrive: (
             state: State,
             action: {
               type: string;
               payload: { drive: string; driveCost: number };
             }
           ) => {
               setDrive(state, action);
           },

           setFinalFuel: (
             state: State,
             action: {
               type: string;
               payload: { fuel: string; fuelCost: number };
             }
           ) => {
             setFuel(state, action);
           }, 
             setPickedCar: (state:State, action: Action<PickedCar>) =>{
                    state.carDetails = action.payload;  
             },
           setFinalColor: (
             state,
             action: {
               type: string;
               payload: {
                 color: { r: number; g: number; b: number; a: number };
               };
             }
           ) => {
             setColors(state, action);
           },
             setCar: (state: State, action: Action<AvaiableCar[]>) => {
                 state.availableCars = action.payload;
             },
             resetAndSetNewCar: (
                 state: State,
             action: { type: string; payload: { name: string } }
           ) => {
               state.customizedCar.name = "";
               state.customizedCar.engine = "";
               state.customizedCar.drive = "";
               state.customizedCar.fuel = "";
               state.customizedCar.engineCost = 0;
               state.customizedCar.driveCost = 0;
               state.customizedCar.fuelCost = 0;
               state.customizedCar.name = action.payload.name;
           },
         },
       });
export const setFinalCar = (state: any) => state.state.customizedCar;
export const setCar: (state: any) => AvaiableCar[] = (state: any) => state.state.availableCars;
export const setPickedCar: (state: any) => PickedCar | null = (state: any) =>
         state.state.carDetails;
export default state;
