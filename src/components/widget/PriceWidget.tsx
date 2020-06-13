import React from "react";
import './_widget.scss'
import {useSelector} from "react-redux";
import {CustomizedCar} from "../../Model";
import { setFinalCar } from "../../app/slices/state";

export function PriceWidget(props: {cost: number}) :JSX.Element {
return (
    <div className="side__widget">
      Total Cost: <br/>  {props.cost} PLN
    </div>
)
}      