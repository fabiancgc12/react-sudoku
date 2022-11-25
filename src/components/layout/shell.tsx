import React, {ReactNode} from "react";
import { FaGamepad } from "react-icons/fa";
import {FcAbout, IoIosStats, SiAboutdotme} from "react-icons/all";
import {Link, NavLink} from "react-router-dom";

type props = {
    children:ReactNode
}

export function Shell({children}:props) {
    return (
        <div className="flex flex-col flex-no-wrap flex-col-reverse md:flex-row min-h-screen justify-between">
            <div
                className="w-full md:w-44 md:h-screen relative bg-gray-800 shadow md:sticky md:top-0  md:flex md:flex-col justify-between
                            inset-x-0 bottom-0"
            >
                <div className="">
                    <ul className="md:mt-8 justify-between flex md:flex-col gap-3">
                        <NavItem icon={<FaGamepad/>} label={"game"} url={""}/>
                        <NavItem icon={<IoIosStats/>} label={"stats"} url={"stats"}/>
                        <NavItem icon={<SiAboutdotme/>} label={"about"} url={"about"}/>
                    </ul>
                </div>
            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto pt-6 mb-5 sm:mb-0 md:py-4 md:w-4/5 w-11/12">
                {children}
            </div>
        </div>
    );
}

type navItemsProp = {
    icon:ReactNode,
    label:string,
    url:string,
}

function NavItem({icon,label,url}:navItemsProp){
    return (
        <NavLink to={url} className={({ isActive }) =>
            isActive ? "basis-full bg-cyan-900 rounded text-white" : "basis-full rounded text-gray-600 hover:bg-gray-700 hover:text-gray-500"
        }>
            <li className="flex w-full justify-center md:justify-between p-2 cursor-pointer items-center">
                <div className="flex items-center">
                    {icon}
                    <span className="text-base capitalize ml-2">{label}</span>
                </div>
            </li>
        </NavLink>
    )
}