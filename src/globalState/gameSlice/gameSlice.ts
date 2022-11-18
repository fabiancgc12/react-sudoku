import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cell} from "@/utils/table/Cell";
import {difficultyEnum, generateGame} from "@/utils/generator/generateGame";
import { WritableDraft } from "immer/dist/internal";

type gameAtomType = {
    table: Cell[][],
    selected: Cell,
    lastMoves:Cell[]
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
    },
    lastMoves:[]
}

function updateCellValue(state: WritableDraft<gameAtomType>, value: number|undefined) {
    if (state.selected.isEditable) {
        //i send a copy of state.selected to avoid reference bug
        pushLastMovesList(state, {...state.selected})
        state.selected.value = value;
        state.table[state.selected.row][state.selected.column] = state.selected;
        // state.selected = {...selectedCell}
    }
}

function pushLastMovesList(state: WritableDraft<gameAtomType>,cell:Cell){
    //deleting first element if length == 10
    if (state.lastMoves.length >= 10){
        const [,...rest] = state.lastMoves;
        state.lastMoves = rest;
    }
    state.lastMoves.push(cell)
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
        },
        restoreLastMove(state){
            const lastMove = state.lastMoves.pop();
            if (lastMove){
                state.table[lastMove.row][lastMove.column] = {...lastMove};
                state.selected = {...lastMove}
            }
        }
    },
})

export const { startGame, setSelectedCell, setCellValue, deleteCellValue, restoreLastMove } = gameSlice.actions
export const gameReducer =  gameSlice.reducer;