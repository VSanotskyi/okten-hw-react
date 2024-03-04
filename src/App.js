import {Route, Router, Routes} from "react-router-dom";
import MainPages from "./pages/MainPages";

const App = () => {
    return (
        <Routes>
            <Route path={""}
                   element={<MainPages/>}
            />
        </Routes>
    );
};

export default App;
