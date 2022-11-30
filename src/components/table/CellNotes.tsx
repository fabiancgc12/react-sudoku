import {Cell} from "@/utils/table/Cell";
import React from "react";

type props = {
    cell: Cell,
    selectedCell:Cell,
    onClick: () => void,
    className:string
}

function getBackgroundColor(cell: Cell, selected: Awaited<Cell>,) {
    let resp = "bg-stone-800"
    const cellIsTheSame = cell.id == selected.id
    const cellSharesColumnOrRow = cell.column == selected.column || cell.row == selected.row || cell.box == selected.box
    // checking if its the same cell
    if (cellIsTheSame){
        resp = "bg-sky-900"
    }
    // checking if they are in the same row or column
    else if (cellSharesColumnOrRow)
        resp = "bg-stone-700"
    resp+=" hover:bg-sky-800"
    return resp
}

function getTextColor(cell: Cell, selected: Awaited<Cell>,note:number) {
    let resp = "text-slate-200"
    const selectedHasError = selected.value && selected.value != selected.solution
    const hasTheSameValue = note == selected.value
    const areTheSameCell = cell.id == selected.id
    //checking if there is a error on selected
    if (hasTheSameValue && selectedHasError){
        resp = "text-red-500"
    }
    else if (hasTheSameValue || areTheSameCell)
        resp = "text-cyan-500"
    return resp
}


export function CellNotes({cell,selectedCell,onClick,className}:props){
    const backGroundColor = getBackgroundColor(cell, selectedCell)
    return (
        <div
            onClick={onClick}
            className={`${className} tableCellNotes group grid-cols-3 grid-rows-3 ${backGroundColor} font-bold`}
        >
            {cell.notes.map(n => {
                const textColor = getTextColor(cell, selectedCell,n)
                return <span key={`cell-${cell.id}-note-${n}`} className={`${textColor} text-xs note-${n} group-hover:text-cyan-500` }>{n}</span>
            })}
        </div>
    )
}
