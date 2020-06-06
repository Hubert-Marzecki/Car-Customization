import React from 'react';
import "./small_button.scss"
import {setFinalCar} from "../../app/slices/finalCarSlice";
import {useSelector} from "react-redux";

export function SmallButton (props:{
    value:string,
    className:string,
    classNameActive:string
    pickModule: any[]
    setValues: (target: string, name:string, cost:number) => void

} ) : JSX.Element  {

const finalCar = useSelector(setFinalCar)
    return (
        <div>



        {props.pickModule?.map((item :any, index:number) => {

            function isThisElementChosen():boolean {
                return (finalCar.engine === item.name || finalCar.drive === item.name || finalCar.fuel === item.name) === true;
            }

            return (
                <div className="button__wrapper"
                     key={index}
                >
                    <button
                        className={isThisElementChosen() ? props.classNameActive : props.className }
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
