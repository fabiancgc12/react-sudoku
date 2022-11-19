import React, {Fragment, useRef, useState} from "react";
import {InputControl} from "@/components/control/inputs/InputControls";
import {useAppDispatch, useAppSelector} from "@/globalState/appStore";
import {deleteCellValue, restoreLastMove, startGame, toggleNotesMode} from "@/globalState/gameSlice/gameSlice";
import {ActionButton} from "@/components/control/actions/ActionButton";
import {
    AiFillEdit,
    AiOutlineCheck,
    AiOutlineEdit,
    BsFillEraserFill, HiChevronUpDown,
    MdSettingsBackupRestore,
    RiRestartFill
} from "react-icons/all";
import {selectIsOnNotesMode} from "@/globalState/gameSlice/gameSelector";
import {IconType} from "react-icons";
import {BaseModal} from "@/components/modals/BaseModal";
import {Dialog, Listbox, Transition} from "@headlessui/react";
import {DifficultyEnum} from "@/utils/generator/generateGame";

export function Controls() {
    const dispatch = useAppDispatch()
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
                <CreateGameAction/>
                <ActionButton onClick={deleteMove} label={"Delete"}>
                    <BsFillEraserFill size={25} className={"group-hover:fill-yellow-600"}/>
                </ActionButton>
                <ActionButton onClick={restoreMove} label={"Restore"}>
                    <MdSettingsBackupRestore size={25} className={"group-hover:fill-yellow-600"}/>
                </ActionButton>
                <ActionButton onClick={toggleNotesModeAction} label={"Notes"}>
                    <NotesModeSVG size={25} className={"fill-yellow-600"}/>
                </ActionButton>
            </div>
        </div>
    )
}

const NotesModeSVG: IconType = (props) => {
    const isEditModeOn = useAppSelector(selectIsOnNotesMode)
    if (isEditModeOn) return <AiFillEdit {...props}/>
    else return <AiOutlineEdit {...props} className={`group-hover:${props.className}`}/>
}

function CreateGameAction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState(DifficultyEnum.easy)
    const dispatch = useAppDispatch()
    const startGameAction = () => {
        dispatch(startGame(selected))
        setIsModalOpen(false)
    }
    const cancelButtonRef = useRef(null)
    return (
        <>
            <ActionButton onClick={() => setIsModalOpen(true)} label={"New Game"}>
                <RiRestartFill size={25} className={"group-hover:fill-yellow-600"}/>
            </ActionButton>
            <BaseModal isOpen={isModalOpen} setOpen={setIsModalOpen}
                       initialFocus={cancelButtonRef}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
                    <div className="sm:flex sm:items-start">
                        <div
                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                            <RiRestartFill className="h-6 w-6 text-blue-600" aria-hidden="true"/>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                New Game
                            </Dialog.Title>
                            <div className="mt-2">
                                <label className={"text-sm"}>
                                    Difficulty
                                </label>
                                <Listbox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <Listbox.Button
                                            className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{isNaN(selected) ? selected : DifficultyEnum[selected] }</span>
                                            <span
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                              <HiChevronUpDown
                                                  className="h-5 w-5 text-gray-400"
                                                  aria-hidden="true"
                                              />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options
                                                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {Object
                                                    .keys(DifficultyEnum)
                                                    .filter(difficulty => !Number(difficulty))
                                                    .map((difficulty, value) => (
                                                    <Listbox.Option
                                                        key={value}
                                                        className={({active}) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={difficulty}
                                                    >
                                                        {({selected}) => (
                                                            <>
                                                      <span
                                                          className={`block truncate ${
                                                              selected ? 'font-medium' : 'font-normal'
                                                          }`}
                                                      >
                                                        {difficulty}
                                                      </span>
                                                    {selected ? (
                                                        <span
                                                            className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                          <AiOutlineCheck className="h-5 w-5" aria-hidden="true"/>
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 rounded-b-lg rounded-l-lg">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={startGameAction}
                    >
                        Start
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setIsModalOpen(false)}
                        ref={cancelButtonRef}
                    >
                        Cancel
                    </button>
                </div>
            </BaseModal>
        </>
    )
}

function renderDifficultyOptions() {

}