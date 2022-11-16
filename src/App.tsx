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
      <div>
          <div className={""}>
              {game.map((row,rowIndex) => <Rows row={row} key={`key-${rowIndex}`}/>)}
          </div>
        <button onClick={onClick}>new</button>
      </div>
  )
}

export default App
