import {useState} from 'react'
import {difficultyEnum, generateGame} from "./utils/generator/generateGame";
import {Rows} from "@/components/table/Rows";


function App() {
  const [count,setCount] = useState(0)
  const game = generateGame(difficultyEnum.easy)
  return (
      <div>
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
          <div>
              {game.map((row,rowIndex) => <Rows row={row} key={`key-${rowIndex}`}/>)}
          </div>
        <button onClick={() => setCount(count+1)}>new</button>
      </div>
  )
}

export default App
