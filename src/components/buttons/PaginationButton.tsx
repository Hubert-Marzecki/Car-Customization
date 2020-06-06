import React from "react";
import "./_pagination__button.scss"

export function PaginationButton(props:{
    text:string,
    className:string,
    newOffset: (offset:number, target:string, limit:number) => void
    offset: number,
    limit:number,
    target: string
}) {
    return (
        <button
            className={props.className}
            onClick={() => props.newOffset(props.offset, props.target, props.limit)}>
            {props.text}
        </button>
    )
}