import React from "react";
import "./_carCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCar } from "../../app/slices/carsSlice";
import pickedCarSlice from "../../app/slices/pickedCarSlice";
import finalCarSlice from "../../app/slices/finalCarSlice";
import { getFromUrl } from "../../services/ApiClient";
import { CarsModels, PickedCar } from "../../Model";

export function CarCard(props: { offset: number; limit: number }): JSX.Element {
  const cars: CarsModels[] = useSelector(setCar);
  const dispatch = useDispatch();

  function loadCar(x: string): void {
    getFromUrl<PickedCar[]>(`http://localhost:3000/models?name=${x}`).then(
      (response: PickedCar[]) => {
        if (response.length !== 0) {
          dispatch(pickedCarSlice.actions.setPickedCar(response[0]));
        }
      }
    );
  }
  return (
    <div className="cards__container">
      {cars
        .slice(props.offset, props.offset + props.limit)
        .map((item: CarsModels) => {
          return (
            <div
              key={item.name}
              className="card"
              onClick={(): void => {
                loadCar(item.name);
                dispatch(finalCarSlice.actions.resetAndSetNewCar({ name: item.name }));

              }}
            >
              <p className="caption">{item.name}</p>
              <img src={item.img} className="img" alt={item.img} />
            </div>
          );
        })}
    </div>
  );
}
