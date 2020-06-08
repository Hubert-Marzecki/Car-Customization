import React from "react";
import "./header.scss";

export function SecondaryHeader(props: { text: string; className: string }) :JSX.Element{
    return (
        <h1 className={props.className}>
            {props.text}
        </h1>
    )

}