import React, { useEffect } from "react";
import "./option_button.scss";
import { useSelector } from "react-redux";
import {CustomizedCar, Target, Element} from "../../Model";
import { getFinalCar } from "../../app/slices/state";

export function OptionButton(props: {
  target: Target;
  className: string;
  classNameActive: string;
  pickModule: Element[];
  setValues: (target: Target, name: string, cost: number) => void;
}): JSX.Element {
  const finalCar: CustomizedCar = useSelector(getFinalCar);

  // set finalCar values if there is options to pick
  useEffect((): void => {
    if (props.pickModule.length === 1) {
        props.setValues(
        props.target,
        props.pickModule[0].name,
        props.pickModule[0].price
      );
    }
  }, [props.pickModule]);

  // display single option as picked while there is only one option
  function singleOption(): JSX.Element {
    return (
      <div className="button__wrapper">
        <button
          className={props.classNameActive}
          value={props.pickModule[0].name}
        >  
          {props.pickModule[0].name}
        </button>
        <p className="button__caption"> {props.pickModule[0].price} PLN </p>
      </div>
    );
  }
  // display multiple options to pick from
  function multipleOption(): JSX.Element[] {
    return props.pickModule.map((item: Element, index: number) => {
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

  // display buttons depending on elements amount
  function displayButtons(): JSX.Element | JSX.Element[] {
    if (props.pickModule.length === 1) {
      return singleOption();
    } else {
      return multipleOption();
    }
  }
  return <div>{displayButtons()}</div>;
}
    