import { Cell } from "@/utils/table/Cell"
import {useAppSelector} from "@/globalState/appStore";
import {selectSelectedCell} from "@/globalState/gameSlice/gameSelector";
import {useDispatch} from "react-redux";
import { setSelectedCell } from "@/globalState/gameSlice/gameSlice";
import {CellValue} from "@/components/table/CellValue";
import React from "react";
import {CellNotes} from "@/components/table/CellNotes";

type props = {
    cell:Cell
}

export function CellTable({cell}:props){
    const dispatch = useDispatch()
    const selectedCell = useAppSelector(selectSelectedCell)

    const onClick = () => {
        dispatch(setSelectedCell(cell))
    }

    const baseStyles = "tableCell grid place-items-center cursor-pointer border border-black"
    //checking if cell has notes
    if (cell.notes.length > 0)
        return <CellNotes className={baseStyles} cell={cell} selectedCell={selectedCell} onClick={onClick}/>
    return <CellValue className={baseStyles} cell={cell} selectedCell={selectedCell} onClick={onClick}/>;
}

