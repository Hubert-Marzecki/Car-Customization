import React, {useEffect} from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {getFromUrl} from "./services/ApiClient";
import carSlice, {setCar} from "./app/slices/carSlice";
import {useDispatch, useSelector} from "react-redux";
import {CarCard} from "./components/carCard/CarCard";

import {SmallButton} from "./components/buttons/SmallButton";
import pickedCarSlice, {setPickedCar} from "./app/slices/pickedCarSlice";
import finalCarSlice, {setFinalCar} from "./app/slices/finalCarSlice";
import finalCar from "./app/slices/finalCarSlice";
import {SideWidget} from "./components/sideWidget/SideWidget";
import {BigHeader} from "./components/headers/BigHeader";
import {SmallerHeader} from "./components/headers/SmallerHeader";

function App() {
    const dispatch = useDispatch();
    const pickedCar = useSelector(setPickedCar)
    const finalCar = useSelector(setFinalCar)

    useEffect(() => {
        getFromUrl("http://localhost:3000/models").then(response => {
            dispatch(carSlice.actions.setCar(response))
        })
    },[])


  return (
    <div className="App">
        <BigHeader
            text={"Pick Model"}
            className={"big__text big__text--picking"}
        />
        <CarCard />
        <BigHeader
            text={`Picked Model: ${!pickedCar.name ? "" : pickedCar.name}`}
            className={"big__text big__text--model"}
        />
        {finalCar.cost != 0 ? <SideWidget/> : 0}


        <div className="button__center">
            <SmallerHeader text="Pick Engines" className={""} />
        <SmallButton value={"engine"} className={"small__button"} pickModule={pickedCar.engines}  />
        <h2> Drive </h2>
        <SmallButton value={"drive"} className={"small__button"} pickModule={pickedCar.drive} />
        <h2> Fuel </h2>
        <SmallButton value="fuel" className={"small__button"} pickModule={pickedCar.fuel} />
        </div>
    </div>
  );
}

export default App;
