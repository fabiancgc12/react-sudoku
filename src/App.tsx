import {useState} from 'react'
import {difficultyEnum, generateGame} from "./utils/generator/generateGame";
import {Cell} from "./utils/table/Cell";

function renderRow(row:Cell[]){
    return row.map(c => <span>{c.value}</span>)
}

function App() {
  const [count,setCount] = useState(0)
  const game = generateGame(difficultyEnum.easy)
  return (
      <div>
          <div>
              {game.map(renderRow)}
          </div>
        <button onClick={() => setCount(count+1)}>new</button>
      </div>
  )
}

export default App
