import React, {useEffect, useState} from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {getFromUrl} from "./services/ApiClient";
import carSlice, {setCar} from "./app/slices/carsSlice";
import {useDispatch, useSelector} from "react-redux";
import {CarCard} from "./components/carCard/CarCard";

import {SmallButton} from "./components/buttons/SmallButton";
import {setPickedCar} from "./app/slices/pickedCarSlice";
import finalCarSlice, {setFinalCar} from "./app/slices/finalCarSlice";
import {PriceWidget} from "./components/widget/PriceWidget";
import {BigHeader} from "./components/headers/BigHeader";
import {SmallerHeader} from "./components/headers/SmallerHeader";
import {PaginationButton} from "./components/buttons/PaginationButton";

function App() {
    const dispatch = useDispatch();
    const pickedCar = useSelector(setPickedCar)
    const finalCar = useSelector(setFinalCar)
    const cars = useSelector(setCar);

    const [offset, setOffset] = useState <number> (0)
    const LIMIT : number= 4;

    useEffect(() => {
        getFromUrl("http://localhost:3000/shortModels").then(response => {
            dispatch(carSlice.actions.setCar(response))
        }).catch(alert)
    },[])

    function newOffset(offset:number, target:string, limit: number) : void {
    switch (target) {
        case "previous": {
            if (offset === 0) {

                return;
            } else {
                setOffset(offset - LIMIT)
            }
           break
        }
        case "next": {
            if(offset + limit >= cars.length ) {

                return
            } else {
                setOffset(offset + LIMIT)
            }
            break
    }


    }
    }
    function setValues(target:string, name:string, cost:number) : void {
        switch (target) {
            case "engine":
                dispatch(finalCarSlice.actions.setFinalEngine({engine:name, engineCost:cost}))
                dispatch(finalCarSlice.actions.setFinalCost())
                break;
            case "drive":
                dispatch(finalCarSlice.actions.setFinalDrive({drive: name,  driveCost: cost}))
                dispatch(finalCarSlice.actions.setFinalCost())
                break;
            case "fuel":
                dispatch(finalCarSlice.actions.setFinalFuel({fuel:name,  fuelCost: cost}));
                dispatch(finalCarSlice.actions.setFinalCost())
                break;
        }
    }

  return (
    <div className="App">
        <BigHeader
            text={"Pick Model"}
            className={"big__text big__text--picking"}
        />

        <CarCard offset={offset} limit={LIMIT}/>

        <div className="pagination__holder">
            <PaginationButton
                text={"previous"}
                className={"pagination pagination__previous"}
                newOffset={newOffset}
                offset={offset}
                limit={LIMIT}
                target={"previous"}
            />
            <PaginationButton
                text={"next"}
                className={"pagination pagination__previous"}
                newOffset={newOffset}
                offset={offset}
                limit={LIMIT}
                target={"next"}
            />
        </div>

        <BigHeader
            text={`Picked Model: ${pickedCar[0] === undefined ? "" : pickedCar[0]?.name}`}
            className={"big__text big__text--model"}
        />
        <div className="button__center">
            <div className="option__wrapper">
                <SmallerHeader text="Pick Engines" className={""} />
                <SmallButton value={"engine"} className={"small__button"} pickModule={pickedCar[0]?.engines}  setValues={setValues} />
            </div>
            <div className="option__wrapper">
                <SmallerHeader text="Drive" className={""} />
                <SmallButton value={"drive"} className={"small__button"} pickModule={pickedCar[0]?.drive} setValues={setValues} />
            </div>
            <div className="option__wrapper">
                 <SmallerHeader text="Fuel " className={""} />
                 <SmallButton value="fuel" className={"small__button"} pickModule={pickedCar[0]?.fuel} setValues={setValues}/>
            </div>
        </div>
        {finalCar.cost != 0 ? <PriceWidget/> : null}
    </div>
  //    todo hide button when pagination ends
  //    todo option__wrpaper separated compoennts?
  //    todo functions outside App.tsx?
  //    todo offset - slice or not

  );
}

export default App;
