import { Cell } from "@/utils/table/Cell"

type CellTableType = {
    cell:Cell
}

export function CellTable({cell}:CellTableType){
    return <span>{cell.value}</span>
}