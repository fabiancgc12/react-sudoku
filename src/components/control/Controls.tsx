import React from "react";
import {InputControl} from "@/components/control/inputs/InputControls";
import {useAppDispatch, useAppSelector} from "@/globalState/appStore";
import {deleteCellValue, restoreLastMove, startGame, toggleNotesMode} from "@/globalState/gameSlice/gameSlice";
import {ActionButton} from "@/components/control/actions/ActionButton";
import {AiFillEdit, AiOutlineEdit, BsFillEraserFill, MdSettingsBackupRestore, RiRestartFill} from "react-icons/all";
import {selectIsOnNotesMode} from "@/globalState/gameSlice/gameSelector";
import {IconType} from "react-icons";

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
    const toggleNotesModeAction = () => {
        dispatch(toggleNotesMode())
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
                <ActionButton onClick={toggleNotesModeAction} label={"Notes"}>
                    <NotesModeVG size={25} className={"fill-yellow-600"}/>
                </ActionButton>
            </div>
        </div>
    )
}

const NotesModeVG:IconType = (props) => {
    const isEditModeOn = useAppSelector(selectIsOnNotesMode)
    if (isEditModeOn) return <AiFillEdit {...props}/>
    else return <AiOutlineEdit {...props} className={`group-hover:${props.className}`} />
}