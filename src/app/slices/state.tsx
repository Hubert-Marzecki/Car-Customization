import { createSlice } from "@reduxjs/toolkit";
import {
  Action,
  AvailableCar,
  CustomizedCar,
  State,
  PickedCar,
} from "../../Model";

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

const setColors = (
  state: State,
  action: {
    type: string;
    payload: { color: { r: number; g: number; b: number; a: number } };
  }
) => {
  state.customizedCar.color = action.payload.color;
};

function resetAndSetNewCar(
  state: State,
  action: { type: string; payload: { name: string } }
) {
  state.customizedCar = {
    ...initialCustomizedCar(),
    name: action.payload.name,
  };
}

function initialCustomizedCar(): CustomizedCar {
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

function initialState(): State {
  return {
    availableCars: [],
    carDetails: null,
    customizedCar: initialCustomizedCar(),
  };
}

export const state = createSlice({
  name: "state",
  initialState: initialState(),
  reducers: {
    setFinalName: (
      state: State,
      action: Action<{ name: string }>
    ) => {
      state.customizedCar.name = action.payload.name;
    },

    setFinalEngine: setEngine,
    setFinalDrive: setDrive,
    setFinalFuel: setFuel,
    setPickedCar: (state: State, action: Action<PickedCar>) => {
      state.carDetails = action.payload;
      resetAndSetNewCar(state, {
        type: "",
        payload: { name: state.customizedCar.name },
      });
    },
    resetAndSetNewCar: resetAndSetNewCar,
    setFinalColor: setColors,
    setAvailableCars: (state: State, action: Action<AvailableCar[]>) => {
      state.availableCars = action.payload;
    },
  },
});


export const getFinalCar = (state: any) => state.state.customizedCar;
export const getAvailableCars: (state: any) => AvailableCar[] = (state: any) =>
  state.state.availableCars;
export const getPickedCar: (state: any) => PickedCar | null = (state: any) =>
  state.state.carDetails;
export default state;
