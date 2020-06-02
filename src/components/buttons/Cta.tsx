import React from 'react';
import "./cta.scss"

export function Cta (props: {text:string}) : JSX.Element  {

    return (

        <button className="cta" > {props.text} </button>

    )




}
