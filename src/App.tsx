import React from "react";
import {GameTable} from "@/components/table/GameTable";
import {Controls} from "@/components/control/Controls";


function App() {
    return (
      <div className={"grid place-items-center"}>
        <GameTable/>
        <Controls/>
      </div>
    )
}

export default App
