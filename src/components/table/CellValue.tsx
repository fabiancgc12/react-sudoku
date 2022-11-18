import {Cell} from "@/utils/table/Cell";

function getBackgroundColor(cell: Cell, selected: Awaited<Cell>) {

    let resp = "bg-stone-800"
    const cellHasError = cell.value && cell.value != cell.solution
    const selectedHasError = selected.value && selected.value != selected.solution
    const cellIsTheSame = cell.id == selected.id
    const cellSharesColumnOrRow = cell.column == selected.column || cell.row == selected.row
    const shareBox = cell.box == selected.box
    //checking is cell has the incorrect value
    if (cellIsTheSame && cellHasError){
        resp = "bg-red-900"
    }
    // checking
    else if (selectedHasError && (cellSharesColumnOrRow || shareBox)){
        resp = "bg-red-800"
    }
    // checking if its the same cell
    else if (cellIsTheSame){
        resp = "bg-sky-900"
    }
    // checking if they are in the same row or column
    else if (cellSharesColumnOrRow)
        resp = "bg-sky-900"
    return resp
}

function getTextColor(cell: Cell, selected: Awaited<Cell>) {
    let resp = "text-slate-200"

    const cellHasError = cell.value && cell.value != cell.solution
    const selectedHasError = selected.value && selected.value != selected.solution
    const hasTheSameValue = cell.value == selected.value
    //checking if there is a error
    if (cellHasError || (hasTheSameValue && selectedHasError)){
        resp = "text-red-500"
    }
    //checking if its the same cell
    else if (cell.isEditable && (cell.column == selected.column || cell.row == selected.row))
        resp = "text-cyan-500"
    else if (cell.isEditable)
        resp = "text-cyan-500"
    return resp
}

type props = {
    cell: Cell,
    selectedCell:Cell,
    onClick: () => void
}

export function CellValue({cell,selectedCell,onClick}:props) {
    const backGroundColor = getBackgroundColor(cell, selectedCell)
    const textColor = getTextColor(cell, selectedCell)

    return (
        <span
            onClick={onClick}
    className={`tableCell grid place-items-center cursor-pointer font-bold text-xl ${textColor} ${backGroundColor} border border-black
        hover:bg-sky-800 hover:text-cyan-500`}>
    {cell.value}
    </span>)
}