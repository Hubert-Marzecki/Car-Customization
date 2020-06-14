import React from "react";
import "./_carCard.scss";
import { useDispatch, useSelector } from "react-redux";

import {fetchPickedCarInfo} from "../../services/ApiClient";
import { AvailableCar, PickedCar } from "../../Model";
import { state, getAvailableCars } from "../../app/slices/state";

export function CarCard(props: { offset: number; limit: number }): JSX.Element {
  const cars: AvailableCar[] = useSelector(getAvailableCars);
  const dispatch = useDispatch();

  // load cars elements info
  function loadCar(x: string): void {
    fetchPickedCarInfo(x).then(
      (response: PickedCar[]) => {
        if (response.length !== 0) {
          dispatch(state.actions.setPickedCar(response[0]));
        }
      }
    );
  }
  
  return (
    <div className="cards__container">
      {cars
        .slice(props.offset, props.offset + props.limit)
        .map((item: AvailableCar) => {
          return (
            <div
              key={item.name}
              className="card"
              onClick={(): void => {
              loadCar(item.name);
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
    