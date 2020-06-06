import React, {useState} from 'react';
import "./_carCard.scss"
import {useDispatch, useSelector} from "react-redux";
import carSlice, {setCar} from "../../app/slices/carsSlice";
import pickedCarSlice, {setPickedCar} from "../../app/slices/pickedCarSlice"
import finalCarSlice from "../../app/slices/finalCarSlice";
import {FinalCar} from "../../Model";
import {getFromUrl} from "../../services/ApiClient";
import {PaginationButton} from "../buttons/PaginationButton";

export function CarCard  (props:{offset: number, limit:number}) : JSX.Element  {
    const cars = useSelector(setCar);
    const dispatch = useDispatch()

    function loadCar(x:string) {
        getFromUrl(`http://localhost:3000/models?name=${x}`).then((response) => {
            dispatch(pickedCarSlice.actions.setPickedCar(response))
    })}

return (
            <div className="cards__container">
                {cars.slice(props.offset, props.offset + props.limit).map((item:any ) => {
                    return (
                        <div
                            key={item.name}
                            className="card"
                            onClick={ () => {
                                loadCar(item.name)
                                dispatch(finalCarSlice.actions.setFinalCarReset())

                            }}
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
