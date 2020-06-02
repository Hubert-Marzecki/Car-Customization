import React from "react";
import "./_bigText.scss";

export function BigText(props: {text:string, className:string}) :JSX.Element{
    return (
        <h1 className={props.className}>
            {props.text}
        </h1>
    )

}