import React, {useEffect} from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {getFromUrl} from "./services/ApiClient";
import carSlice, {setCar} from "./app/slices/carSlice";
import {useDispatch, useSelector} from "react-redux";
import {CarCard} from "./components/carCard/CarCard";
import {BigText} from "./components/bigText/BigText";
import {SmallButton} from "./components/buttons/SmallButton";
import pickedCarSlice, {setPickedCar} from "./app/slices/pickedCarSlice";
import finalCarSlice from "./app/slices/finalCarSlice";
import finalCar from "./app/slices/finalCarSlice";

function App() {
    const dispatch = useDispatch();
    const pickedCar = useSelector(setPickedCar)

    useEffect(() => {
        getFromUrl("http://localhost:3000/models").then(response => {
            dispatch(carSlice.actions.setCar(response))
        })
    },[])

    function setEngine({x, y }:any) :void {
    dispatch(finalCarSlice.actions.setFinalEngines({x: x, y:y}))
    }

  return (
    <div className="App">
        <BigText
            text={"Pick Model"}
            className={"big__text big__text--picking"}
        />
        <CarCard />
        <BigText
            text={`Picked Model: ${!pickedCar.name ? "" : pickedCar.name}`}
            className={"big__text big__text--model"}
        />


        <div className="button__center">
            <h3> Pick Engines </h3>
        <SmallButton text={"engine"} className={"small__button"} pickModule={pickedCar.engines}  />
        <h3> Drive </h3>
        <SmallButton text={"drive"} className={"small__button"} pickModule={pickedCar.drive} />
        <h3> Fuel </h3>
        <SmallButton text={"fuel"} className={"small__button"} pickModule={pickedCar.fuel} />
        </div>
    </div>
  );
}

export default App;
