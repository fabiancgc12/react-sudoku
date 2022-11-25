import {GameTable} from "@/components/table/GameTable";
import {Controls} from "@/components/control/Controls";
import {WinModalMessage} from "@/components/modals/WinModalMessage";
import React from "react";

export function GamePage(){
    return (
        <div className={"grid place-items-center"}>
            <GameTable/>
            <Controls/>
            <WinModalMessage/>
        </div>
    )
}