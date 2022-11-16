import React from "react";
import {GameTable} from "@/components/table/GameTable";
import {useSetAtom} from "jotai";
import {GameTableAtom} from "@/globalState/game.atom";
import {difficultyEnum, generateGame} from "@/utils/generator/generateGame";
import {useGameActions} from "@/globalState/gameActionHook";


function App() {
    const {startGame} = useGameActions()

    const onClick = () => {
        startGame()
    }
    return (
      <div className={"grid place-items-center"}>
        <GameTable/>
        <button onClick={onClick}>new</button>
      </div>
    )
}

export default App
