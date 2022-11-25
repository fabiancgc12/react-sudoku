import {MouseEventHandler, ReactNode} from "react";

type props = {
    children:ReactNode,
    onClick:MouseEventHandler<HTMLButtonElement>
    label:string
}

export function ActionButton({children,onClick,label}:props){
    return (
        <button onClick={onClick} className={"group flex flex-col justify-center items-center bg-zinc-600 hover:bg-zinc-700 rounded-md p-2"}>
            <span>{children}</span>
            <span className={"group-hover:text-yellow-600 "}>{label}</span>
        </button>
    )
}