import {FaGamepad} from "react-icons/fa";
import {IoIosStats, SiAboutdotme} from "react-icons/all";
import React, {ReactNode} from "react";
import {NavLink} from "react-router-dom";

export function NavBar(){
    return (
        <div className="">
            <ul className="md:mt-8 justify-between flex md:flex-col gap-3">
                <NavItem icon={<FaGamepad/>} label={"game"} url={""}/>
                <NavItem icon={<IoIosStats/>} label={"stats"} url={"stats"}/>
                <NavItem icon={<SiAboutdotme/>} label={"about"} url={"about"}/>
            </ul>
        </div>
    )
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