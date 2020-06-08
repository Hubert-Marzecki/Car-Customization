import React from "react";
import './_widget.scss'
import {useSelector} from "react-redux";
import {setFinalCar} from "../../app/slices/finalCarSlice";
import {FinalCar} from "../../Model";

export function PriceWidget() :JSX.Element {
const finalCar :FinalCar = useSelector(setFinalCar)
return (
    <div className="side__widget">
      Total Cost: <br/>  {finalCar.cost} PLN
    </div>
)
}