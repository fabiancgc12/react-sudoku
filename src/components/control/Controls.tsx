import React from "react";
import {InputControl} from "@/components/control/inputs/InputControls";
import {useAppDispatch} from "@/globalState/appStore";
import {deleteCellValue, restoreLastMove, startGame} from "@/globalState/gameSlice/gameSlice";
import {ActionButton} from "@/components/control/actions/ActionButton";
import {BsFillEraserFill, MdSettingsBackupRestore, RiRestartFill} from "react-icons/all";

export function Controls(){
    const dispatch = useAppDispatch()
    const startGameAction = () => {
        dispatch(startGame())
    }
    const deleteMove = () => {
        dispatch(deleteCellValue())
    }
    const restoreMove = () => {
        dispatch(restoreLastMove())
    }
    return (
        <div className={'w-4/6 mt-4'}>
            <InputControl/>
            <div className={"mt-4 grid place-items-center grid-cols-4"}>
                <ActionButton onClick={startGameAction} label={"New Game"}>
                    <RiRestartFill size={25} className={"group-hover:fill-yellow-600"}/>
                </ActionButton>
                <ActionButton onClick={deleteMove} label={"Delete"}>
                    <BsFillEraserFill size={25} className={"group-hover:fill-yellow-600"}/>
                </ActionButton>
                <ActionButton onClick={restoreMove} label={"Restore"}>
                    <MdSettingsBackupRestore size={25} className={"group-hover:fill-yellow-600"}/>
                </ActionButton>
            </div>
        </div>
    )
}