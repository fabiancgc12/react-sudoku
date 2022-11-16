import { Cell } from "@/utils/table/Cell"
import {useAtom} from "jotai";
import {selectedCoordinatesAtom} from "@/globalState/game.atom";

type CellTableType = {
    cell:Cell
}

export function CellTable({cell}:CellTableType){
    const [selectedCoordinates,setSelectedCoordinates] = useAtom((selectedCoordinatesAtom))
    const onClick = () => {
        setSelectedCoordinates([cell.column,cell.row])
    }
    return (
    <span
        onClick={onClick}
        className={`tableCell grid place-items-center cursor-pointer font-bold text-xl text-slate-200 bg-stone-800 border border-black
        hover:bg-cyan-900 hover:text-cyan-500`}>
        {cell.column}
    </span>)
}

