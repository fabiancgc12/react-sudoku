import {Cell} from "@/utils/table/Cell";

function getBackgroundColor(cell: Cell, selected: Awaited<Cell>) {

    let resp = "bg-stone-800" // defaullt bg for cells
    const cellHasError = cell.value && cell.value != cell.solution
    const selectedHasError = selected.value && selected.value != selected.solution
    const cellIsTheSame = cell.id == selected.id
    const cellSharesColumnOrRow = cell.column == selected.column || cell.row == selected.row
    const shareBox = cell.box == selected.box
    //checing if its not undefinied and share value
    const hasTheSameValue = cell.value && cell.value == selected.value

    //styles if its the same cell has the selected one
    if (cellIsTheSame){
        if (cellHasError) resp = "bg-red-900"
        else resp = "bg-sky-900"
    }
    //styles if its share column,row or box
    else if (cellSharesColumnOrRow || shareBox){
        if (hasTheSameValue && (selectedHasError || cellHasError)) resp = "bg-red-800"
        else if (hasTheSameValue) resp = "bg-sky-800"
        else resp = "bg-stone-700"
    }
    //style if they share the same value
    else if (hasTheSameValue){
        resp = "bg-sky-800"
    }

    return resp
}

function getTextColor(cell: Cell, selected: Awaited<Cell>) {
    let resp = "text-slate-200"

    const cellHasError = cell.value && cell.value != cell.solution
    const selectedHasError = selected.value && selected.value != selected.solution
    const hasTheSameValue = cell.value == selected.value
    const cellIsTheSame = cell.id == selected.id
    //checking if there is a error
    if (cellHasError || (hasTheSameValue && selectedHasError)){
        resp = "text-red-500"
    }
    //checking if same value but not same cell
    else if (hasTheSameValue && !cellIsTheSame)
        resp = "text-cyan-600"
    else if (cell.isEditable && (cell.column == selected.column || cell.row == selected.row))
        resp = "text-cyan-300"
    else if (cell.isEditable)
        resp = "text-cyan-300"
    if (cell.isEditable)
        resp+=" hover:text-cyan-200"
    return resp
}

type props = {
    cell: Cell,
    selectedCell:Cell,
    onClick: () => void,
    className:string
}

export function CellValue({cell,selectedCell,onClick,className}:props) {
    const backGroundColor = getBackgroundColor(cell, selectedCell)
    const textColor = getTextColor(cell, selectedCell)

    return (
        <span
            onClick={onClick}
    className={`${className} font-bold text-xl ${textColor} ${backGroundColor} 
        `}>
    {cell.value}
    </span>)
}