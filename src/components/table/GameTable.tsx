import {useEffect, useState} from "react";
import {difficultyEnum, generateGame} from "@/utils/generator/generateGame";
import {Rows} from "@/components/table/Rows";
import {useAtom} from "jotai";
import {GameTableAtom} from "@/globalState/game.atom";

export function GameTable(){
    const [game,setGame] = useAtom(GameTableAtom)
    useEffect(() => {
        setGame(generateGame(difficultyEnum.easy))
    },[])
    console.log(game)
    return (
        <div className={"grid place-items-center w-2/6 aspect-square grid-rows-9"}>
            {game.map((row,rowIndex) => <Rows row={row} key={`key-${rowIndex}`}/>)}
        </div>
    )
}