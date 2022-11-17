import { createSelector } from '@reduxjs/toolkit'
import {RootState} from "@/globalState/appStore";

export const selectGameState = (state:RootState) => state.gameReducer;
export const selectGameTable = createSelector(selectGameState, (game) => game.table)
export const selectSelectedCell = createSelector(selectGameState, (game) => game.selectedCoordinates)