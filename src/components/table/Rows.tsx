import { Cell } from "@/utils/table/Cell"
import {CellTable} from "@/components/table/CellTable";

type RowsType = {
    row:Cell[]
}

export function Rows({row}:RowsType){
    return <div>
        {row.map((cell,columnIndex) => <CellTable cell={cell} />)}
    </div>
}