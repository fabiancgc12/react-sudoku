import { createSelector } from '@reduxjs/toolkit'
import {RootState} from "@/globalState/appStore";

export const selectGameState = (state:RootState) => state.gameReducer;
export const selectGameTable = createSelector(selectGameState, (game) => game.table)
export const selectSelectedCell = createSelector(selectGameState, (game) => game.selected);
export const selectLastMoves = createSelector(selectGameState, (game) => game.lastMoves);

export const selectCountTableValues = createSelector(selectGameTable, (table) => {
    const counts = new Map<number,number>([
    ])
    table.forEach(row => {
        row.forEach(c => {
            //setting default values
            if (!counts.get(c.solution))
                counts.set(c.solution,0)
            if (c.value && c.value == c.solution) {
                const value = counts.get(c.value);
                if (value){
                    counts.set(c.value,value + 1)
                } else {
                    counts.set(c.value,1)
                }
            }
        })
    })
    return counts
})

export const selectPlayerHasWon = createSelector(selectCountTableValues,count =>{
    if (count.size == 0) return false
    let resp = true
    count.forEach(c => {
        resp = resp && c == 9
    })
    return resp
})

export const selectCountValue = createSelector([
    selectCountTableValues,
    (state:RootState,filter:number) => filter
],(countValues,filter) => {
    return countValues.get(filter)
})