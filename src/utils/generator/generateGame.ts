import {Cell, createCell} from "@/utils/table/Cell";

declare namespace sudoku {
    function generate(dif:DifficultyEnum|number | keyof typeof DifficultyEnum): string;
    function solve(board:string): string;
}

export enum DifficultyEnum {
    easy=         62,
    medium=       53,
    hard=         44,
    veryHard=   35,
    insane=       26,
    inhuman=      17,
}

// @ts-ignore
export const dificultyKeys = Object.keys(DifficultyEnum).map(key => DifficultyEnum[key]).filter(value => typeof value === 'string') as string[];

export function generateGame(difficulty:DifficultyEnum|number | keyof typeof DifficultyEnum):Cell[][]{
    const game = sudoku.generate(difficulty);
    const solution = sudoku.solve(game).match(/.{1,9}/g) as string[];
    //split the game string into segemnts of 9 digits
    const gameRows = game.match(/.{1,9}/g) as string[];

    let table:Cell[][] = [];
    let row:Cell[] = [];
    //TODO refactor later, too many loops
    table = gameRows.map((r,rowCount) => {
        const row:Cell[] = [];
        for (let columnCount = 0;columnCount < r.length; columnCount++){
            const cell = createCell(r[columnCount],solution[rowCount][columnCount],columnCount,rowCount)
            row.push(cell)
        }
        return row
    })
    return table
}