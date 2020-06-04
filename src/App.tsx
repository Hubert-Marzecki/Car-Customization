import React, {useEffect} from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {getFromUrl} from "./services/ApiClient";
import carSlice, {setCar} from "./app/slices/carsSlice";
import {useDispatch, useSelector} from "react-redux";
import {CarCard} from "./components/carCard/CarCard";

import {SmallButton} from "./components/buttons/SmallButton";
import pickedCarSlice, {setPickedCar} from "./app/slices/pickedCarSlice";
import finalCarSlice, {setFinalCar} from "./app/slices/finalCarSlice";
import finalCar from "./app/slices/finalCarSlice";
import {PriceWidget} from "./components/widget/PriceWidget";
import {BigHeader} from "./components/headers/BigHeader";
import {SmallerHeader} from "./components/headers/SmallerHeader";

function App() {
    const dispatch = useDispatch();
    const pickedCar = useSelector(setPickedCar)
    const finalCar = useSelector(setFinalCar)

    useEffect(() => {
        getFromUrl("http://localhost:3000/shortModels").then(response => {
            dispatch(carSlice.actions.setCar(response))
        }).catch(alert)
    },[])




  return (
    <div className="App">
        <BigHeader
            text={"Pick Model"}
            className={"big__text big__text--picking"}
        />
        <CarCard />
        <BigHeader
            text={`Picked Model: ${pickedCar[0] === undefined ? "" : pickedCar[0]?.name}`}
            className={"big__text big__text--model"}
        />
        {finalCar.cost != 0 ? <PriceWidget/> : ""}


        <div className="button__center">

            <SmallerHeader text="Pick Engines" className={""} />
        <SmallButton value={"engine"} className={"small__button"} pickModule={pickedCar[0]?.engines}  />
            <SmallerHeader text="Drive" className={""} />
        <SmallButton value={"drive"} className={"small__button"} pickModule={pickedCar[0]?.drive} />
            <SmallerHeader text="Fuel " className={""} />
        <SmallButton value="fuel" className={"small__button"} pickModule={pickedCar[0]?.fuel} />
        </div>
    </div>
  );
}

export default App;
