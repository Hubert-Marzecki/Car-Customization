import React from 'react';
import "./small_button.scss"
import finalCarSlice from "../../app/slices/finalCarSlice";
import {useDispatch} from "react-redux";

export function SmallButton (props:{text:string, className:string, pickModule: any[]   } ) : JSX.Element  {
const dispatch = useDispatch();




    return (
        <div>
        {props.pickModule?.map((item :any) => {

            function setValues(x:string) {
                switch (x) {
                    case "engine":
                        dispatch(finalCarSlice.actions.setFinalEngines({engine: item.name, cost: item.price}))
                        break;
                    case "drive":
                        dispatch(finalCarSlice.actions.setFinalDrive({drive: item.name,  cost: item.price}))
                        break;
                    case "fuel":
                        dispatch(finalCarSlice.actions.setFinalFuel({fuel: item.name,  cost: item.price}))
                        break;

                }
            }

                return (

                    <button
                        key={item.name}
                        className={props.className}
                        value={item.name}
                        onClick={() => setValues(props.text)}
                    >
                        {item.name}

                    </button>

                )
            })
        }
        </div>
    )




}
