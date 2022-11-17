import React, {useEffect} from "react";
import {useGameActions} from "@/globalState/gameActionHook";
import {InputControl} from "@/components/control/inputs/InputControls";

export function Controls(){
    const {startGame} = useGameActions()
    const onClick = () => {
        startGame()
    }
    return (
        <div className={'w-4/6 mt-4'}>
            <InputControl/>
            <button onClick={onClick}>new</button>
        </div>
    )
}