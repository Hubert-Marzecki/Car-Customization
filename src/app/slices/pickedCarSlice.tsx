import {Action, PickedCar, State} from "../../Model";
import {createSlice} from "@reduxjs/toolkit";

type PickedCarState = PickedCar | null;
function initialState(): PickedCarState {
  return null;
}
export const pickedCar = createSlice({
  name: "pickedCar",
  initialState: initialState(),
  reducers: {
    setPickedCar: (state: PickedCarState, action: Action<PickedCar>) =>
      action.payload,
  },
});

export const setPickedCar: (state: State) => PickedCarState = (state: State) =>
  state.pickedCar;
export default pickedCar;

// {
//     availableCars: {name: string, image: string}[],
//     chosenCar: Option<{}>
//     finalCar: { key: null | cuś }
// }
