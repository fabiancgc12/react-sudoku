export class Cell {

    value?:number = undefined;
    solution:number;
    row:number;
    column:number;
    box:number

    constructor(value:string,solution:string,column:number,row:number) {
        if (value != ".")
            this.value = Number(value)
        this.solution = Number(solution)
        this.row = row;
        this.column = column;
        this.box = (this.row)*9 + this.column
    }
}