import React from "react";
import {GameTable} from "@/components/table/GameTable";
import {Controls} from "@/components/control/Controls";
import {Provider} from "react-redux";
import {AppStore} from "@/globalState/appStore";
import {WinModalMessage} from "@/components/modals/WinModalMessage";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {Shell} from "@/components/layout/shell";

const persist = persistStore(AppStore)

function App() {
    return (
    <Provider store={AppStore}>
        <PersistGate loading={null} persistor={persist}>
            <Shell>
                <div className={"grid place-items-center"}>
                    <GameTable/>
                    <Controls/>
                    <WinModalMessage/>
                </div>
            </Shell>
        </PersistGate>
    </Provider>
    )
}

export default App
