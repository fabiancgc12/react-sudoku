import {GameTable} from "@/components/table/GameTable";
import {useSetAtom} from "jotai";
import {GameTableAtom} from "@/globalState/game.atom";
import {difficultyEnum, generateGame} from "@/utils/generator/generateGame";


function App() {
    const setGame = useSetAtom(GameTableAtom);

    const onClick = () => {
        setGame(generateGame(difficultyEnum.easy))
    }
    return (
      <div className={"grid place-items-center"}>
        <GameTable/>
        <button onClick={onClick}>new</button>
      </div>
    )
}

export default App
