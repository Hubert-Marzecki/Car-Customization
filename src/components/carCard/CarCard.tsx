import React from 'react';
import "./_carCard.scss"
import {useDispatch, useSelector} from "react-redux";
import {setCar} from "../../app/slices/carsSlice";
import pickedCarSlice from "../../app/slices/pickedCarSlice"
import finalCarSlice from "../../app/slices/finalCarSlice";
import {getFromUrl} from "../../services/ApiClient";
import {CarsModels} from "../../Model";

export function CarCard  (props:{offset: number, limit:number}) : JSX.Element  {
    const cars : CarsModels[]= useSelector(setCar);
    const dispatch = useDispatch()

    function loadCar(x:string) :void {
        getFromUrl(`http://localhost:3000/models?name=${x}`).then((response) => {
            dispatch(pickedCarSlice.actions.setPickedCar(response))
    })}
return (
            <div className="cards__container">
                {cars.slice(props.offset, props.offset + props.limit).map((item:CarsModels ) => {
                    return (
                        <div
                            key={item.name}
                            className="card"
                            onClick={ () => {
                                loadCar(item.name)
                                dispatch(finalCarSlice.actions.setFinalCarReset())
                                dispatch(finalCarSlice.actions.setFinalName({name: item.name}))
                            }}
                        >
                            <p className="caption">{item.name}</p>
                            <img
                                src={item.img}
                                className="img"
                                alt={item.img}
                            />
                        </div>
                    )
                })}
            </div>
        )
}
