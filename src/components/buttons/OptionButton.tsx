import React, { useEffect } from "react";
import "./option_button.scss";
import { useSelector } from "react-redux";
import {CustomizedCar, Target} from "../../Model";
import { getFinalCar } from "../../app/slices/state";

type Element = { name: string; price: number };
export function OptionButton(props: {
  target: Target;
  className: string;
  classNameActive: string;
  pickModule: Element[];
  setValues: (target: Target, name: string, cost: number) => void;
}): JSX.Element {
  useEffect((): void => {
    if (props.pickModule?.length === 1) {
      props.setValues(
        props.target,
        props.pickModule[0].name,
        props.pickModule[0].price
      );
    }
  }, [props.pickModule]);

  const finalCar: CustomizedCar = useSelector(getFinalCar);
  function singleOption(): JSX.Element {
    return (
      <div className="button__wrapper">
        <button
          className={props.classNameActive}
          value={props.pickModule[0].name}
        >  
          {props.pickModule[0].name}
        </button>
        <p className="button__caption"> {props.pickModule[0].price} PLN</p>
      </div>
    );
  }
  function multipleOption(): JSX.Element[] {
    return props.pickModule?.map((item: any, index: number) => {
      function isThisElementChosen(): boolean {
        return (
          finalCar.engine === item.name ||
          finalCar.drive === item.name ||
          finalCar.fuel === item.name
        );
      }

      return (
        <div className="button__wrapper" key={index}>
          <button
            className={
              isThisElementChosen() ? props.classNameActive : props.className
            }
            value={item.name}
            onClick={() => props.setValues(props.target, item.name, item.price)}
          >
            {item.name}
          </button>
          <p className="button__caption"> {item.price} PLN</p>
        </div>
      );
    });
  }

  function displayButtons(): JSX.Element | JSX.Element[] {
    if (props.pickModule?.length === 1) {
      return singleOption();
    } else {
      return multipleOption();
    }
  }

  return <div>{displayButtons()}</div>;
}
    