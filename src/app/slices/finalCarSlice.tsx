import { createSlice } from "@reduxjs/toolkit";

interface FinalCar {
    name: string,
    body: string
    engine:string,
    drive:string,
    fuel:string,
    cost:number
}

function initialState() :FinalCar {
    return {
        name: "",
        body: "",
        engine:"",
        drive:"",
        fuel:"",
        cost:0
    }
}




export const finalCar = createSlice({
    name: "finalCar",
    initialState: initialState(),
    reducers:{

            // setFinalName: (state, action) => state.token = action.payload.test,

// setFinalCar: (state:FinalCar, action) => {
// },


        setFinalName: (state:FinalCar, action) => {
            state.name =  action.payload.name
        },
        setFinalBody: (state:FinalCar, action) => {
            state.body = action.payload.body
        },
        setFinalEngines: (state:FinalCar, action) => {
            state.engine = action.payload.body
            state.cost = action.payload.cost
            console.log(action.payload)
        },
        setFinalDrive: (state:FinalCar, action) => {
            state.drive = action.payload.drive
            state.cost = action.payload.cost
            console.log(action.payload)

        },
        setFinalFuel: (state:FinalCar, action) => {
            const fuel = action.payload.fuel
            state.fuel = fuel
        },

        setFinalCost: (state:FinalCar, action) => {
            state.cost = action.payload.cost
        },
    }
})
export const {
   setFinalName, setFinalBody, setFinalCost, setFinalDrive, setFinalEngines, setFinalFuel,
} = finalCar.actions;

export const setFinalCar = (state:any) => state.finalCar;
export default finalCar;
