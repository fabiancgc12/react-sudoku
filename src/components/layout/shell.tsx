import React, {ReactNode} from "react";
import { FaGamepad } from "react-icons/fa";
import {FcAbout, IoIosStats, SiAboutdotme} from "react-icons/all";
import {Link, NavLink} from "react-router-dom";
import {NavBar} from "@/components/layout/NavBar";

type props = {
    children:ReactNode
}

export function Shell({children}:props) {
    return (
        <div className="flex flex-col flex-no-wrap flex-col-reverse md:flex-row min-h-screen justify-between">
            <div
                className="z-20 w-full md:w-44 md:h-screen fixed bg-gray-800 shadow md:sticky md:top-0  md:flex md:flex-col justify-between
                            inset-x-0 bottom-0"
            >
                <NavBar/>
            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="isolate container bg-zinc-900 z-10 basis-full w-full pt-6 px-4 pb-12 md:pb-5 sm:mb-0 md:py-4 md:w-4/5">
                {children}
            </div>
        </div>
    );
}