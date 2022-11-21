import React from "react";
import {GameTable} from "@/components/table/GameTable";
import {Controls} from "@/components/control/Controls";
import {Provider} from "react-redux";
import {AppStore} from "@/globalState/appStore";
import {WinModalMessage} from "@/components/modals/WinModalMessage";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

const persist = persistStore(AppStore)

function App() {
    return (
    <Provider store={AppStore}>
        <PersistGate loading={null} persistor={persist}>
            <div className={"grid place-items-center"}>
                <GameTable/>
                <Controls/>
                <WinModalMessage/>
            </div>
        </PersistGate>
    </Provider>
    )
}

export default App
