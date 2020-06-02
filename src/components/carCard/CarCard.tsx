import React from 'react';
import "./_carCard.scss"
import {useDispatch, useSelector} from "react-redux";
import {setCar} from "../../app/slices/carSlice";
import pickedCarSlice from "../../app/slices/pickedCarSlice"
import finalCarSlice from "../../app/slices/finalCarSlice";

export function CarCard  () : JSX.Element  {
    const cars = useSelector(setCar);
    const dispatch = useDispatch()

return (
            <div className="cards__container">
                {cars.map((item:any ) => {
                    return (
                        <div
                            key={item.name}
                            className="card"
                            onClick={ () => {
                                dispatch(pickedCarSlice.actions.setPickedCar(item)) ;
                                dispatch(finalCarSlice.actions.setFinalName({ name: item.name}))
                            } }
                        >
                            <p className="caption">{ item.name}</p>
                            <img
                                src = {item.img}
                                className="img"
                                alt={item.img}
                            />
                        </div>
                    )
                })}
            </div>
        )

}
