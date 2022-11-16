import { Cell } from "@/utils/table/Cell"
import {CellTable} from "@/components/table/CellTable";

type RowsType = {
    row:Cell[]
}

export function Rows({row}:RowsType){
    return <div className="grid grid-cols-9 w-full h-full">
        {row.map((cell) => <CellTable cell={cell} key={`cell-${cell.box}`}/>)}
    </div>
}