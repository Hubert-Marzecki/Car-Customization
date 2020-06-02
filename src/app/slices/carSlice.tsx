import { createSlice} from "@reduxjs/toolkit";


// function initialState() {
// return {
//     name: "Spider",
//     body: ["cabriolet"],
//     img: "https://i.picsum.photos/id/1018/300/300.jpg",
//     picked:false,
//     engines: [
//         {
//             "name": "tier",
//             "price": 3000
//         },
//         {
//             "name": "v system",
//             "price": 3400
//         }
//     ],
//     drive: [
//         {
//             "name": "Front-wheel",
//             "price": 1030
//         },
//         {
//             "name": "4X4",
//             "price": 1000
//         },
//         {
//             "name": "Rear-wheel",
//             "price": 900
//         }
//     ],
//     fuel: [
//         {
//             "name": "gasoline",
//             "price": 200
//         },
//         {
//             "name": "diesel",
//             "price": 300
//         }
//     ],
//     seats: {
//         "min-seats": 2,
//         "max-seats": 4,
//         "seat-price": 2000
//     }
// }
// }


export const car = createSlice({
    name: "car",
    initialState: [],
    reducers:{
        setCar: ( state:any, action) => action.payload
    }
})

export const setCar = (state:any) => state.car;
export default car;
