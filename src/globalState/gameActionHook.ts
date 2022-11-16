import {useSetAtom} from "jotai";
import {GameTableAtom, selectedCoordinatesAtom} from "@/globalState/game.atom";
import {difficultyEnum, generateGame} from "@/utils/generator/generateGame";
import {Cell} from "@/utils/table/Cell";

export function useGameActions(){
    const setGame = useSetAtom(GameTableAtom);
    const setSelectedCoordinates = useSetAtom(selectedCoordinatesAtom);

    const startGame = () => {
        setGame(generateGame(difficultyEnum.easy))
        setSelectedCoordinates({column:-1,row:-1})
    }

    const setSelectedCell = (cell:Cell) => {
        setSelectedCoordinates({column:cell.column,row:cell.row})
    }

    return {
        setGame,
        startGame,
        setSelectedCell
    }
}