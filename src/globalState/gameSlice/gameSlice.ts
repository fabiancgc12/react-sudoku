import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cell} from "../../utils/table/Cell";
import {difficultyEnum, generateGame} from "../../utils/generator/generateGame";
import {act} from "react-dom/test-utils";
import { WritableDraft } from "immer/dist/internal";

type gameAtomType = {
    table: Cell[][],
    selected: Cell
}

const initialState: gameAtomType = {
    table: [],
    selected: {
        column: -1,
        row: -1,
        id: -1,
        isEditable: false,
        value: undefined,
        solution: -1,
        box: -1
    }
}

function updateCellValue(state: WritableDraft<gameAtomType>, value: number|undefined) {
    const selectedCell = state.table[state.selected.row][state.selected.column];
    if (selectedCell.isEditable) {
        selectedCell.value = value;
        state.table[state.selected.row][state.selected.column] = selectedCell;
        state.selected = {...selectedCell}
    }
}

const gameSlice = createSlice({
    name: "gameState",
    initialState,
    reducers: {
        startGame(state) {
            state.table = generateGame(difficultyEnum.easy);
            state.selected = initialState.selected;
        },
        setSelectedCell(state,action: PayloadAction<Cell>) {
            state.selected = action.payload
        },
        setCellValue(state,action: PayloadAction<number>){
            updateCellValue(state, action.payload);
        },
        deleteCellValue(state){
            updateCellValue(state,undefined)
        }
    },
})

export const { startGame, setSelectedCell, setCellValue, deleteCellValue } = gameSlice.actions
export const gameReducer =  gameSlice.reducer;