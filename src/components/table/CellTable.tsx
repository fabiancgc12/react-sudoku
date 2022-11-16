import { Cell } from "@/utils/table/Cell"
import {useAtom} from "jotai";
import {selectedCoordinatesAtom} from "@/globalState/game.atom";

type CellTableType = {
    cell:Cell
}

function getBackgroundColor(cell: Cell, selectedCoordinates: [column: number, row: number] | undefined) {
    let resp = "bg-stone-800"

    if (selectedCoordinates && cell.column == selectedCoordinates[0] && cell.row == selectedCoordinates[1])
        resp = "bg-sky-900"
    return resp
}

function getTextColor(cell: Cell, selectedCoordinates: [column: number, row: number] | undefined) {
    let resp = "text-slate-200"

    if (selectedCoordinates && cell.column == selectedCoordinates[0] && cell.row == selectedCoordinates[1])
        resp = "text-cyan-500"
    return resp
}

export function CellTable({cell}:CellTableType){
    const [selectedCoordinates,setSelectedCoordinates] = useAtom((selectedCoordinatesAtom))
    const onClick = () => {
        setSelectedCoordinates([cell.column,cell.row])
    }

    const backGroundColor = getBackgroundColor(cell,selectedCoordinates)
    const textColor = getTextColor(cell,selectedCoordinates)

    return (
    <span
        onClick={onClick}
        className={`tableCell grid place-items-center cursor-pointer font-bold text-xl ${textColor} ${backGroundColor} border border-black
        hover:bg-sky-700 hover:text-cyan-500`}>
        {cell.column}
    </span>)
}

