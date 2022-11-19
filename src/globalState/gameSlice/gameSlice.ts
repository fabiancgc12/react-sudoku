import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cell} from "@/utils/table/Cell";
import {DifficultyEnum, generateGame} from "@/utils/generator/generateGame";
import { WritableDraft } from "immer/dist/internal";
import {act} from "react-dom/test-utils";

type gameAtomType = {
    table: Cell[][],
    selected: Cell,
    lastMoves:Cell[],
    notesMode:boolean
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
        box: -1,
        notes:[]
    },
    lastMoves:[],
    notesMode:false
}

function updateCellValue(state: WritableDraft<gameAtomType>, value: number|undefined) {
    //checking in case its the initial value
    if (state.selected.id < 0 || !state.selected.isEditable)
        return

    pushLastMovesList(state, {...state.selected})
    if (state.notesMode && value){
        const notes:Set<number> = new Set([...state.selected.notes]);
        if (notes.has(value))
            notes.delete(value)
        else
            notes.add(value);
        state.selected.notes = [...notes];
    } else {
        //i send a copy of state.selected to avoid reference bug
        state.selected.value = value;
        state.selected.notes = [];
    }
    state.table[state.selected.row][state.selected.column] = state.selected;
    // state.selected = {...selectedCell}
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
        startGame(state,action: PayloadAction<DifficultyEnum|undefined>) {
            const difficulty = action.payload ?? DifficultyEnum.easy
            state.table = generateGame(80);
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
        },
        toggleNotesMode(state){
           state.notesMode = !state.notesMode
        }
    },
})

export const { startGame, setSelectedCell, setCellValue, deleteCellValue, restoreLastMove, toggleNotesMode } = gameSlice.actions
export const gameReducer =  gameSlice.reducer;