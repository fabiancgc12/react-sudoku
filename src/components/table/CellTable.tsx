import { Cell } from "@/utils/table/Cell"

type CellTableType = {
    cell:Cell
}

export function CellTable({cell}:CellTableType){
    const extraBorder = getBorderSize(cell)
    return (
    <span
        className={`grid place-items-center cursor-pointer font-bold text-xl text-slate-200 bg-stone-800 border border-black ${extraBorder}
        hover:bg-cyan-900 hover:text-cyan-500`}>
        {cell.value}
    </span>)
}

function getBorderSize(cell:Cell){
    let resp = "";
    if ((cell.column % 3) == 0)
        resp+='border-r-2'
    else if (((cell.column - 1) % 3) == 0)
        resp+='border-l-2'
    if ((cell.row % 3) == 0)
        resp+=' border-b-2'
    else if (((cell.row - 1) % 3) == 0)
        resp+=' border-t-2'
    return resp
}