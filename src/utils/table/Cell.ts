export interface Cell {

    value?:number;
    solution:number;
    row:number;
    column:number;
    box:number;
    isEditable:boolean
}

export function createCell(value:string|number,solution:string|number,column:number,row:number):Cell{
    let cellValue:number|undefined = undefined
    if (value != ".")
        cellValue = Number(value)
    solution = Number(solution)
    const box = (row)*9 + column
    return {
        value:cellValue,
        solution,
        row,
        column,
        box,
        isEditable: value == "."
    }
}