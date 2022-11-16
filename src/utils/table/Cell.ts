export class Cell {

    value:number;
    solution:number;
    row:number;
    column:number;

    constructor(value:string,solution:string,column:number,row:number) {
        if (value == ".")
            this.value = 0;
        else
            this.value = Number(value)
        this.solution = Number(solution)
        this.row = row + 1;
        this.column = column + 1;
    }
}