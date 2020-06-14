import React from "react";
import './_widget.scss'


export function PriceWidget(props: {cost: number, className:string}) :JSX.Element {
return (
    <div className={props.className}>
      Total Cost: <br/>  {props.cost} PLN
    </div>
)
}      