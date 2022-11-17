import React from "react";
import {InputControl} from "@/components/control/inputs/InputControls";
import {useAppDispatch} from "@/globalState/appStore";
import { startGame } from "@/globalState/gameSlice/gameSlice";
import {ActionButton} from "@/components/control/actions/ActionButton";
import {RiRestartFill} from "react-icons/all";

export function Controls(){
    const dispatch = useAppDispatch()
    const onClick = () => {
        dispatch(startGame())
    }
    return (
        <div className={'w-4/6 mt-4'}>
            <InputControl/>
            <div className={"mt-4"}>
                <ActionButton onClick={onClick} label={"New Game"}>
                    <RiRestartFill size={30} className={"group-hover:fill-yellow-600"}/>
                </ActionButton>
            </div>
        </div>
    )
}