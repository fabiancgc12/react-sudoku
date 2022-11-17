export interface Cell {

    value?:number;
    solution:number;
    row:number;
    column:number;
    id:number;
    box:number;
    isEditable:boolean
}

export function createCell(value:string|number,solution:string|number,column:number,row:number):Cell{
    let cellValue:number|undefined = undefined
    if (value != ".")
        cellValue = Number(value)
    solution = Number(solution)
    const id = (row)*9 + column
    const box = Math.trunc(row/3)*3 + Math.trunc(column/3)
    return {
        value:cellValue,
        solution,
        row,
        column,
        id: id,
        isEditable: value == ".",
        box
    }
}