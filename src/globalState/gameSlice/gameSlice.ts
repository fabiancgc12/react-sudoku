import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cell} from "../../utils/table/Cell";
import {difficultyEnum, generateGame} from "../../utils/generator/generateGame";

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
        }
    },
})

export const { startGame, setSelectedCell } = gameSlice.actions
export const gameReducer =  gameSlice.reducer;