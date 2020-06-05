import React from 'react';
import "./small_button.scss"
import finalCarSlice, {setFinalCar} from "../../app/slices/finalCarSlice";
import {useDispatch, useSelector} from "react-redux";

export function SmallButton (props:{
    value:string,
    className:string,
    pickModule: any[]
    setValues: (target: string, name:string, cost:number) => void
} ) : JSX.Element  {
const dispatch = useDispatch();


    return (
        <div>
        {props.pickModule?.map((item :any) => {



                return (
<div className="button__wrapper"
     key={item.name}>
                    <button

                        className={props.className}
                        value={item.name}
                        onClick={() => props.setValues(props.value, item.name, item.price)}
                    >
                        {item.name}

                    </button>
                <p className="button__caption">  {item.price} PLN</p>
</div>
                )
            })
        }
        </div>
    )




}
