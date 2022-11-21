import { combineReducers } from '@reduxjs/toolkit'
import {gameReducer} from "@/globalState/gameSlice/gameSlice";
export const rootReducer = combineReducers({
    gameReducer
})