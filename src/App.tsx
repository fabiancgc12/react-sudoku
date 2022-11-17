import React from "react";
import {GameTable} from "@/components/table/GameTable";
import {Controls} from "@/components/control/Controls";
import {Provider} from "react-redux";
import {AppStore} from "@/globalState/appStore";


function App() {
    return (
    <Provider store={AppStore}>
      <div className={"grid place-items-center"}>
        <GameTable/>
        <Controls/>
      </div>
    </Provider>
    )
}

export default App
