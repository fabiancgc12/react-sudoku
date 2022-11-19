import React, {useEffect, useRef, useState} from "react";
import {BaseModal} from "@/components/modals/BaseModal";
import {useSelector} from "react-redux";
import {selectPlayerHasWon} from "@/globalState/gameSlice/gameSelector";
import {AiOutlineCheck, RiRestartFill} from "react-icons/all";
import {Dialog} from "@headlessui/react";

export function WinModalMessage(){
    const [isOpen,setIsOpen] = useState(false);
    const playerHasWon = useSelector(selectPlayerHasWon);
    useEffect(() => {
        if (playerHasWon)
            setIsOpen(true)
    },[playerHasWon])
    const closeButtonRef = useRef(null)

    return (
    <BaseModal setOpen={setIsOpen} isOpen={isOpen} initialFocus={closeButtonRef}>
        <div className={"grid place-items center"}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
                <div className="flex flex-col items-center justify-center ">
                    <div
                        className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <AiOutlineCheck className="h-6 w-6 text-green-600" aria-hidden="true"/>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg text-center font-medium leading-6 text-gray-900">
                            New Game
                        </Dialog.Title>
                        <p>
                            You have won the game!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-center sm:flex sm:flex-row-reverse sm:px-6 rounded-b-lg rounded-l-lg">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-green-300 bg-green-500 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0  sm:text-sm"
                    onClick={() => setIsOpen(false)}
                    ref={closeButtonRef}
                >
                    Go Back
                </button>
            </div>
        </div>
    </BaseModal>)
}