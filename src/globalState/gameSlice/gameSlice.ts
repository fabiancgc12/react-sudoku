import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cell} from "../../utils/table/Cell";
import {difficultyEnum, generateGame} from "../../utils/generator/generateGame";
import {act} from "react-dom/test-utils";

type gameAtomType = {
    table:Cell[][],
    selectedCoordinates:{
        column:number,
        row:number
    }
}

const initialState:gameAtomType = {
    table: [],
    selectedCoordinates: {
        column: -1,
        row: -1
    }
}

function updateCellValue(table:Cell[][],coordinates: gameAtomType["selectedCoordinates"],value:number|undefined){
    const selectedCell = table[coordinates.row][coordinates.column];
    if (selectedCell.isEditable){
        selectedCell.value = value;
        table[coordinates.row][coordinates.column] = selectedCell;
    }
}

const gameSlice = createSlice({
    name: "gameState",
    initialState,
    reducers: {
        startGame(state) {
            state.table = generateGame(difficultyEnum.easy);
            state.selectedCoordinates = initialState.selectedCoordinates;
        },
        setSelectedCell(state,action: PayloadAction<Cell>) {
            state.selectedCoordinates.row = action.payload.row
            state.selectedCoordinates.column = action.payload.column
        },
        setCellValue(state,action: PayloadAction<number>){
            updateCellValue(state.table,state.selectedCoordinates,action.payload)
        }
    },
})

export const { startGame, setSelectedCell, setCellValue } = gameSlice.actions
export const gameReducer =  gameSlice.reducer;