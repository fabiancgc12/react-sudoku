import {Rows} from "@/components/table/Rows";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/globalState/appStore";
import {selectGameTable} from "@/globalState/gameSlice/gameSelector";
import { startGame } from "@/globalState/gameSlice/gameSlice";

export function GameTable(){
    const dispatch = useAppDispatch()
    const gameTable = useAppSelector(selectGameTable)
    useEffect(() => {
        dispatch(startGame());
    },[])
    console.log(gameTable)
    return (
        <div className={"grid place-items-center w-2/6 aspect-square grid-rows-9"}>
            {gameTable.map((row,rowIndex) => <Rows row={row} key={`row-${rowIndex}`}/>)}
        </div>
    )
}