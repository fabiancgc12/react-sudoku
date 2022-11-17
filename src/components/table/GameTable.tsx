import {Rows} from "@/components/table/Rows";
import {useAtomValue} from "jotai";
import {GameTableAtom} from "@/globalState/game.atom";
import {useEffect} from "react";
import {useGameActions} from "@/globalState/gameActionHook";

export function GameTable(){
    const gameTable = useAtomValue(GameTableAtom);
    const {startGame} = useGameActions()
    useEffect(() => {
        startGame();
    },[])
    console.log(gameTable)
    return (
        <div className={"grid place-items-center w-2/6 aspect-square grid-rows-9"}>
            {gameTable.map((row,rowIndex) => <Rows row={row} key={`key-${rowIndex}`}/>)}
        </div>
    )
}