import {Cell} from "@/utils/table/Cell";

function getBackgroundColor(cell: Cell, selected: Awaited<Cell>) {
    let resp = "bg-stone-800" // default bg for cells
    const cellHasError = cell.value && cell.value != cell.solution
    const selectedHasError = selected.value && selected.value != selected.solution
    const cellIsTheSame = cell.id == selected.id
    const cellSharesColumnOrRow = cell.column == selected.column || cell.row == selected.row
    const shareBox = cell.box == selected.box
    //checking if its not undefined and share value
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
    resp+=" hover:bg-sky-800"
    return resp
}

function getTextColor(cell: Cell, selected: Awaited<Cell>) {
    let resp = "text-slate-200"
    if (!cell.isEditable)
        return resp
    const cellHasError = cell.value && cell.value != cell.solution
    //checking if there is a error
    resp = "text-cyan-300"
    if (cellHasError)
        resp = "text-red-500"
    //checking if same value but not same cell
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