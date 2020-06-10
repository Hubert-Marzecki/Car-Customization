import React, { useEffect, useState } from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";

import { getFromUrl } from "./services/ApiClient";
import carSlice, { setCar } from "./app/slices/carsSlice";
import { useDispatch, useSelector } from "react-redux";
import { CarCard } from "./components/carCard/CarCard";
import { OptionButton } from "./components/buttons/OptionButton";
import { setPickedCar } from "./app/slices/pickedCarSlice";
import finalCarSlice, { setFinalCar } from "./app/slices/finalCarSlice";
import { PriceWidget } from "./components/widget/PriceWidget";
import { BigHeader } from "./components/headers/BigHeader";
import { SecondaryHeader } from "./components/headers/SecondaryHeader";
import { PaginationButton } from "./components/buttons/PaginationButton";
import { ColorPicker } from "./components/colorPicker/ColorPickerComponent";
import {CarsModels, FinalCar, PickedCar, Target} from "./Model";

// todo delete unused libaries
function App(): JSX.Element {
  const dispatch = useDispatch();
  const pickedCar: PickedCar | null = useSelector(setPickedCar);
  const finalCar: FinalCar = useSelector(setFinalCar);
  const cars: CarsModels[] = useSelector(setCar);
  const [offset, setOffset] = useState<number>(0);
  const LIMIT: number = 4;

  useEffect((): void => {
    getFromUrl("http://localhost:3000/shortModels")
      .then((response: any) => {
        dispatch(carSlice.actions.setCar(response));
      })
      .catch(alert);
  }, []);

  function newOffset(offset: number, target: string, limit: number): void {
    switch (target) {
      case "previous": {
        if (offset === 0) {
          return;
        } else {
          setOffset(offset - LIMIT);
        }
        break;
      }
      case "next": {
        if (offset + limit >= cars.length) {
          return;
        } else {
          setOffset(offset + LIMIT);
        }
        break;
      }
    }
  }

  //alternatywa
  //   function setElement(target: string) {
  //     return (name: string, cost: number) => setValues(target, name, cost);
  //   }
  function setValues(target: Target, name: string, cost: number) : void {
    switch (target) {
      case "engine":
        dispatch(
          finalCarSlice.actions.setFinalEngine({
            engine: name,
            engineCost: cost,
          })
        );
        break;
      case "drive":
        dispatch(finalCarSlice.actions.setFinalDrive({drive:name, driveCost:cost}))
        break;
      case "fuel":
        dispatch(
          finalCarSlice.actions.setFinalFuel({ fuel: name, fuelCost: cost })
        );
        break;
    }
  }

  return (
    <div className="App">
      <BigHeader text={"Pick Model"} className={"header header__big"} />

      <CarCard offset={offset} limit={LIMIT} />

      <div className="pagination__holder">
        <PaginationButton
          text={"previous"}
          className={
            offset === 0
              ? "pagination__button--disable pagination__button "
              : "pagination__button "
          }
          newOffset={newOffset}
          offset={offset}
          limit={LIMIT}
          target={"previous"}
        />
        <PaginationButton
          text={"next"}
          className={
            offset + LIMIT >= cars.length
              ? "pagination__button--disable pagination__button "
              : "pagination__button"
          }
          newOffset={newOffset}
          offset={offset}
          limit={LIMIT}
          target={"next"}
        />
      </div>

      <BigHeader
        text={`Picked Model: ${
          pickedCar?.name || ""
          // pickedCar === null ? "" : pickedCar?.name
        }`}
        className={"header header__big"}
      />
      <div className="pick__section">
        {pickedCar !== null ? (
          <>
            <div className="option__wrapper">
              <SecondaryHeader
                text="Pick Engines"
                className="header header__secondary"
              />

              <OptionButton
                target="engine"
                className="option__button"
                classNameActive="option__button option__button--active"
                pickModule={pickedCar.engines}
                setValues={setValues}
              />
            </div>
            <div className="option__wrapper">
              <SecondaryHeader
                text="Drive"
                className="header header__secondary"
              />
              <OptionButton
                  target="drive"
                className="option__button"
                classNameActive="option__button option__button--active"
                pickModule={pickedCar.drive}
                // setValues={setElement("drive")}
                setValues={setValues}
              />
            </div>
            <div className="option__wrapper">
              <SecondaryHeader
                text="Fuel "
                className={"header header__secondary"}
              />
              <OptionButton
                  target="fuel"
                className="option__button"
                classNameActive="option__button option__button--active"
                pickModule={pickedCar.fuel}
                setValues={setValues}
              />
            </div>

            {finalCar.cost > 0 ? <PriceWidget /> : null}
            <SecondaryHeader
              text="Pick Car Color"
              className="header header__secondary"
            />
            <ColorPicker />
          </>
        ) : null}
      </div>
    </div>
  );
}
export default App;
