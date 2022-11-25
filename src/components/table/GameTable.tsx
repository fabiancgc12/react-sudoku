import {Rows} from "@/components/table/Rows";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/globalState/appStore";
import {selectGameTable, selectPlayerHasWon} from "@/globalState/gameSlice/gameSelector";
import { startGame, stopGame, resumeGame, finaliceGame } from "@/globalState/gameSlice/gameSlice";
import {useBeforeUnload} from "@/utils/hooks/useBeforeUnload";

export function GameTable(){
    const dispatch = useAppDispatch()
    const gameTable = useAppSelector(selectGameTable)
    const playerHasWon = useAppSelector(selectPlayerHasWon);
    //stoping the game in case of closing or re loading window
    useBeforeUnload(() => dispatch(stopGame()))
    useEffect(() => {
        if (playerHasWon)
            dispatch(finaliceGame());
    },[playerHasWon])

    useEffect(() => {
        //if length > 0 then there is already a game in the store
        if (gameTable.length == 0)
            dispatch(startGame());
        else
            dispatch(resumeGame());
        return () => {
            dispatch(stopGame());
        }
    },[])

    return (
        <div className={"grid place-items-center w-full md:w-2/3 lg:w-5/6 xl:w-2/5  aspect-square grid-rows-9"}>
            {gameTable.map((row,rowIndex) => <Rows row={row} key={`row-${rowIndex}`}/>)}
        </div>
    )
}