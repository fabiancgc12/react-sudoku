import { Cell } from "@/utils/table/Cell"
import {useAppSelector} from "@/globalState/appStore";
import {selectSelectedCell} from "@/globalState/gameSlice/gameSelector";
import {useDispatch} from "react-redux";
import { setSelectedCell } from "@/globalState/gameSlice/gameSlice";

type CellTableType = {
    cell:Cell
}

function getBackgroundColor(cell: Cell, selectedCoordinates: Awaited<{ column: number; row: number }>) {
    let resp = "bg-stone-800"

    //checking if its the same cell
    if (cell.column == selectedCoordinates.column && cell.row == selectedCoordinates.row)
        resp = "bg-sky-900"
    // checking if they are in the same row or column
    else if (cell.column == selectedCoordinates.column || cell.row == selectedCoordinates.row)
        resp = "bg-sky-700"
    return resp
}

function getTextColor(cell: Cell, selectedCoordinates: Awaited<{ column: number; row: number }>) {
    let resp = "text-slate-200"

    //checking if its the same cell
    if (cell.column == selectedCoordinates.column || cell.row == selectedCoordinates.row)
        resp = "text-cyan-500"
    return resp
}


export function CellTable({cell}:CellTableType){
    const dispatch = useDispatch()
    const selectedCoordinates = useAppSelector(selectSelectedCell)

    const onClick = () => {
        dispatch(setSelectedCell(cell))
    }

    const backGroundColor = getBackgroundColor(cell,selectedCoordinates)
    const textColor = getTextColor(cell,selectedCoordinates)

    return (
    <span
        onClick={onClick}
        className={`tableCell grid place-items-center cursor-pointer font-bold text-xl ${textColor} ${backGroundColor} border border-black
        hover:bg-sky-800 hover:text-cyan-500`}>
        {cell.value}
    </span>)
}

