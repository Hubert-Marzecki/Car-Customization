import React from "react";
import "./_carCard.scss";
import { useDispatch, useSelector } from "react-redux";

import { getFromUrl } from "../../services/ApiClient";
import { AvaiableCar, CustomizedCar, PickedCar } from "../../Model";
import { state, setCar } from "../../app/slices/state";

export function CarCard(props: { offset: number; limit: number }): JSX.Element {
  const cars: AvaiableCar[] = useSelector(setCar);
  const dispatch = useDispatch();

  function loadCar(x: string): void {
    getFromUrl<PickedCar[]>(`http://localhost:3000/models?name=${x}`).then(
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
        .map((item: AvaiableCar) => {
          return (
            <div
              key={item.name}
              className="card"
              onClick={(): void => {
                loadCar(item.name);
                dispatch(state.actions.resetAndSetNewCar({ name: item.name }));

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
    