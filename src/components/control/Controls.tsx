import React from "react";
import {InputControl} from "@/components/control/inputs/InputControls";
import {useAppDispatch} from "@/globalState/appStore";
import { startGame } from "@/globalState/gameSlice/gameSlice";

export function Controls(){
    const dispatch = useAppDispatch()
    const onClick = () => {
        dispatch(startGame())
    }
    return (
        <div className={'w-4/6 mt-4'}>
            <InputControl/>
            <button onClick={onClick}>new</button>
        </div>
    )
}