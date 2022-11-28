import React from "react";
import {GameTable} from "@/components/table/GameTable";
import {Controls} from "@/components/control/Controls";
import {Provider} from "react-redux";
import {AppStore} from "@/globalState/appStore";
import {WinModalMessage} from "@/components/modals/WinModalMessage";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {Shell} from "@/components/layout/shell";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GamePage} from "@/pages/gamePage/GamePage";
import {AboutPage} from "@/pages/aboutPage/AboutPage";
import {StatsPage} from "@/pages/statsPage/StatsPage";

const persist = persistStore(AppStore)

function App() {
    return (
    <Provider store={AppStore}>
        <PersistGate loading={null} persistor={persist}>
            <BrowserRouter>
                <div className="">
                    <Shell>
                        <Routes>
                            <Route path="/" element={ <GamePage/> } />
                            <Route path="/about" element={ <AboutPage/> } />
                            <Route path="/stats" element={ <StatsPage/> } />
                        </Routes>
                    </Shell>
                </div>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    )
}

export default App
