import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {rootReducer} from "./rootReducer";

export const AppStore = configureStore({
    reducer: rootReducer,
})
export type RootState = ReturnType<typeof AppStore.getState>

export type AppDispatch = typeof AppStore.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

