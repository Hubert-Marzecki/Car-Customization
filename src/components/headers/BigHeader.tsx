import React from "react";
import "./header.scss";

export function BigHeader(props: { text: string; className: string }) :JSX.Element{
    return (
        <h2 className={props.className}>
            {props.text}
        </h2>
    )

}