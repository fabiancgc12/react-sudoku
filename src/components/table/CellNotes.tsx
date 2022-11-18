import {Cell} from "@/utils/table/Cell";

type props = {
    cell: Cell,
    selectedCell:Cell,
    onClick: () => void
}


export function CellNotes({cell,selectedCell,onClick}:props){
    // const backGroundColor = getBackgroundColor(cell, selectedCell)
    return (
        <div
            onClick={onClick}
            className={`bg-stone-800 hover:bg-sky-800`}
        >
            {cell.notes.map(n => <span>{n}</span>)}
        </div>
    )
}
