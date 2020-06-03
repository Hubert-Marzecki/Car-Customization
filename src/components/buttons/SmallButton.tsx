import React from 'react';
import "./small_button.scss"
import finalCarSlice, {setFinalCar} from "../../app/slices/finalCarSlice";
import {useDispatch, useSelector} from "react-redux";

export function SmallButton (props:{value:string, className:string, pickModule: any[]   } ) : JSX.Element  {
const dispatch = useDispatch();
const finalCar = useSelector(setFinalCar)



    return (
        <div>
        {props.pickModule?.map((item :any) => {

            function setValues(x:string) {
                switch (x) {
                    case "engine":
                        dispatch(finalCarSlice.actions.setFinalEngine({engine:item.name, engineCost:item.price}))
                        // można wyrzucić do finalEngine etc
                        dispatch(finalCarSlice.actions.setFinalCost())
                        break;
                    case "drive":
                        dispatch(finalCarSlice.actions.setFinalDrive({drive: item.name,  driveCost: item.price}))
                        dispatch(finalCarSlice.actions.setFinalCost())
                        break;
                    case "fuel":
                        dispatch(finalCarSlice.actions.setFinalFuel({fuel:item.name,  fuelCost: item.price}));
                        dispatch(finalCarSlice.actions.setFinalCost())
                        break;
                }
            }

                return (

                    <button
                        key={item.name}
                        className={props.className}
                        value={item.name}
                        onClick={() => setValues(props.value)}
                    >
                        {item.name}

                    </button>

                )
            })
        }
        </div>
    )




}
