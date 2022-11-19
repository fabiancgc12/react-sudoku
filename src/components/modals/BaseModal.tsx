import React, {Fragment, MouseEventHandler, ReactNode, useRef, useState} from "react";
import {RiRestartFill} from "react-icons/all";
import { Dialog, Transition } from '@headlessui/react'
import {DifficultyEnum} from "@/utils/generator/generateGame";

type props = {
    setOpen:(open:boolean) => void;
    isOpen:boolean;
    children:ReactNode,
    initialFocus: React.MutableRefObject<null>
}

export function BaseModal({isOpen,setOpen,children,initialFocus}:props) {
    return (
        <Transition.Root show={isOpen} as={Fragment} >
            <Dialog as="div" className="relative z-10 " initialFocus={initialFocus} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-y-visible rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}