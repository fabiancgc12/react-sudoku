import {useState} from 'react'
import {difficultyEnum, generateGame} from "./utils/generator/generateGame";
import {Rows} from "@/components/table/Rows";


function App() {
  const [game,setGame] = useState(generateGame(difficultyEnum.easy));
  const onClick = () => {
      setGame(generateGame(difficultyEnum.easy))
  }
  console.log(game)
  return (
      <div className={"grid place-items-center"}>
          <div className={"grid place-items-center w-2/6 aspect-square grid-rows-9"}>
              {game.map((row,rowIndex) => <Rows row={row} key={`key-${rowIndex}`}/>)}
          </div>
        <button onClick={onClick}>new</button>
      </div>
  )
}

export default App
