import React, {useEffect} from 'react';
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
useEffect(() => {
   if( props.pickModule?.length ===1) {
       props.setValues(props.value, props.pickModule?.[0].name, props.pickModule?.[0].price)
   }

},[props.pickModule])


const finalCar = useSelector(setFinalCar)
    function singleOption() {
        return (
            <div className="button__wrapper"
            >
                <button
                    className={props.classNameActive}
                    value={props.pickModule[0].name}
                >
                    {props.pickModule[0].name}
                </button>
                <p className="button__caption">  {props.pickModule[0].price} PLN</p>
            </div>
        )
    }
    function multipleOption() {
        return (
            props.pickModule?.map((item :any, index:number) => {

                function isThisElementChosen():boolean {
                    return (finalCar.engine === item.name || finalCar.drive === item.name || finalCar.fuel === item.name);
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

        )
    }


    function displayButtons() {
        if(props.pickModule?.length ===1 ){
            return  singleOption()

        } else {
         return multipleOption()
        }
    }





    return (
        <div>
            {displayButtons()}
        </div>
    )




}
